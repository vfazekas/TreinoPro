"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, CheckCircle2, Clock, Dumbbell, Video, ImageIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface Exercise {
  id: string
  name: string
  sets: string
  reps: string
  rest: string
  notes: string
  mediaType: "gif" | "video" | "none"
  mediaUrl: string
  completed: boolean
}

export default function MeuTreinoPage() {
  const [activeWorkout, setActiveWorkout] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      name: "Supino Reto",
      sets: "4",
      reps: "12",
      rest: "60",
      notes: "Manter os cotovelos a 45 graus do corpo",
      mediaType: "gif",
      mediaUrl: "/supino-reto-exercicio.jpg",
      completed: false,
    },
    {
      id: "2",
      name: "Supino Inclinado",
      sets: "3",
      reps: "12",
      rest: "60",
      notes: "Foco na parte superior do peitoral",
      mediaType: "video",
      mediaUrl: "https://youtube.com/watch?v=example",
      completed: false,
    },
    {
      id: "3",
      name: "Crucifixo",
      sets: "3",
      reps: "15",
      rest: "45",
      notes: "Movimento controlado, sentir o alongamento",
      mediaType: "gif",
      mediaUrl: "/crucifixo-exercicio.jpg",
      completed: false,
    },
    {
      id: "4",
      name: "Tríceps Testa",
      sets: "3",
      reps: "12",
      rest: "45",
      notes: "Manter os cotovelos fixos",
      mediaType: "none",
      mediaUrl: "",
      completed: false,
    },
  ])

  const completedExercises = exercises.filter((ex) => ex.completed).length
  const progress = (completedExercises / exercises.length) * 100

  const toggleExerciseComplete = (id: string) => {
    setExercises(exercises.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex)))
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Meu Treino</h2>
          <p className="text-muted-foreground mt-2">Treino de Peito e Tríceps</p>
        </div>
        <Button
          size="lg"
          onClick={() => setActiveWorkout(!activeWorkout)}
          variant={activeWorkout ? "outline" : "default"}
        >
          {activeWorkout ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Finalizar Treino
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Iniciar Treino
            </>
          )}
        </Button>
      </div>

      {activeWorkout && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Treino em Andamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span className="font-medium">
                  {completedExercises} de {exercises.length} exercícios
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
                <span>Duração: 60 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Tempo decorrido: 23 min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {exercises.map((exercise, index) => (
          <Card
            key={exercise.id}
            className={`transition-all ${exercise.completed ? "opacity-60 border-primary/50" : ""} ${activeWorkout ? "cursor-pointer hover:shadow-md" : ""}`}
            onClick={() => activeWorkout && setSelectedExercise(exercise)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${exercise.completed ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      {exercise.completed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <span className="font-semibold">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <CardTitle className={exercise.completed ? "line-through" : ""}>{exercise.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {exercise.sets} séries × {exercise.reps} repetições • {exercise.rest}s descanso
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {exercise.mediaType !== "none" && (
                    <Badge variant="outline" className="gap-1">
                      {exercise.mediaType === "gif" ? (
                        <>
                          <ImageIcon className="h-3 w-3" /> GIF
                        </>
                      ) : (
                        <>
                          <Video className="h-3 w-3" /> Vídeo
                        </>
                      )}
                    </Badge>
                  )}
                  {activeWorkout && (
                    <Button
                      size="sm"
                      variant={exercise.completed ? "outline" : "default"}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExerciseComplete(exercise.id)
                      }}
                    >
                      {exercise.completed ? "Desmarcar" : "Concluir"}
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            {exercise.notes && (
              <CardContent>
                <p className="text-sm text-muted-foreground">{exercise.notes}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedExercise} onOpenChange={() => setSelectedExercise(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedExercise?.name}</DialogTitle>
            <DialogDescription>
              {selectedExercise?.sets} séries × {selectedExercise?.reps} repetições • {selectedExercise?.rest}s descanso
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedExercise?.mediaType !== "none" && selectedExercise?.mediaUrl && (
              <div className="rounded-lg overflow-hidden bg-muted">
                {selectedExercise.mediaType === "gif" ? (
                  <Image
                    src={selectedExercise.mediaUrl || "/placeholder.svg"}
                    alt={selectedExercise.name}
                    className="w-full h-auto"
                    width={20}
                    height={20}
                  />
                ) : (
                  <div className="aspect-video flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground" />
                    <p className="ml-2 text-sm text-muted-foreground">Vídeo: {selectedExercise.mediaUrl}</p>
                  </div>
                )}
              </div>
            )}
            {selectedExercise?.notes && (
              <div className="space-y-2">
                <h4 className="font-semibold">Observações:</h4>
                <p className="text-sm text-muted-foreground">{selectedExercise.notes}</p>
              </div>
            )}
            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                if (selectedExercise) {
                  toggleExerciseComplete(selectedExercise.id)
                  setSelectedExercise(null)
                }
              }}
            >
              {selectedExercise?.completed ? "Desmarcar como Concluído" : "Marcar como Concluído"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
