"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, GripVertical, Video, ImageIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface Exercise {
  id: string
  name: string
  sets: string
  reps: string
  rest: string
  notes: string
  mediaType: "gif" | "video" | "none"
  mediaUrl: string
}

export default function NovoTreinoPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    studentId: "",
    duration: "",
  })

  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      name: "",
      sets: "",
      reps: "",
      rest: "",
      notes: "",
      mediaType: "none",
      mediaUrl: "",
    },
  ])

  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        id: Date.now().toString(),
        name: "",
        sets: "",
        reps: "",
        rest: "",
        notes: "",
        mediaType: "none",
        mediaUrl: "",
      },
    ])
  }

  const removeExercise = (id: string) => {
    setExercises(exercises.filter((ex) => ex.id !== id))
  }

  const updateExercise = (id: string, field: keyof Exercise, value: string) => {
    setExercises(exercises.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Aqui você salvaria no banco de dados
      console.log("[v0] Dados do treino:", { formData, exercises })

      // Simular salvamento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      router.push("/dashboard/treinos")
    } catch (error) {
      console.error("Erro ao criar treino:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Criar Novo Treino</h2>
        <p className="text-muted-foreground mt-2">Crie um treino personalizado para seu aluno</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Treino</CardTitle>
            <CardDescription>Dados básicos sobre o treino</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Treino</Label>
                <Input
                  id="title"
                  placeholder="Ex: Treino de Peito e Tríceps"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student">Aluno</Label>
                <Select
                  value={formData.studentId}
                  onValueChange={(value) => setFormData({ ...formData, studentId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o aluno" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">João Silva</SelectItem>
                    <SelectItem value="2">Maria Santos</SelectItem>
                    <SelectItem value="3">Pedro Costa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                placeholder="Descreva o objetivo e foco deste treino..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duração Estimada (minutos)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="60"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercícios</CardTitle>
            <CardDescription>Adicione os exercícios do treino</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercises.map((exercise, index) => (
              <Card key={exercise.id} className="border-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                      <span className="font-semibold">Exercício {index + 1}</span>
                    </div>
                    {exercises.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeExercise(exercise.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nome do Exercício</Label>
                    <Input
                      placeholder="Ex: Supino Reto"
                      value={exercise.name}
                      onChange={(e) => updateExercise(exercise.id, "name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Séries</Label>
                      <Input
                        placeholder="4"
                        value={exercise.sets}
                        onChange={(e) => updateExercise(exercise.id, "sets", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Repetições</Label>
                      <Input
                        placeholder="12"
                        value={exercise.reps}
                        onChange={(e) => updateExercise(exercise.id, "reps", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Descanso (seg)</Label>
                      <Input
                        placeholder="60"
                        value={exercise.rest}
                        onChange={(e) => updateExercise(exercise.id, "rest", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de Mídia</Label>
                    <Select
                      value={exercise.mediaType}
                      onValueChange={(value: "gif" | "video" | "none") =>
                        updateExercise(exercise.id, "mediaType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Sem mídia</SelectItem>
                        <SelectItem value="gif">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="h-4 w-4" />
                            GIF da biblioteca
                          </div>
                        </SelectItem>
                        <SelectItem value="video">
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            URL de vídeo
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {exercise.mediaType !== "none" && (
                    <div className="space-y-2">
                      <Label>{exercise.mediaType === "gif" ? "URL do GIF" : "URL do Vídeo"}</Label>
                      <Input
                        placeholder={
                          exercise.mediaType === "gif"
                            ? "https://exemplo.com/exercicio.gif"
                            : "https://youtube.com/watch?v=..."
                        }
                        value={exercise.mediaUrl}
                        onChange={(e) => updateExercise(exercise.id, "mediaUrl", e.target.value)}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Observações</Label>
                    <Textarea
                      placeholder="Dicas de execução, cuidados, etc..."
                      value={exercise.notes}
                      onChange={(e) => updateExercise(exercise.id, "notes", e.target.value)}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button type="button" variant="outline" className="w-full bg-transparent" onClick={addExercise}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Exercício
            </Button>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()} className="flex-1">
            Cancelar
          </Button>
          <Button type="submit" disabled={loading} className="flex-1">
            {loading ? "Salvando..." : "Criar Treino"}
          </Button>
        </div>
      </form>
    </div>
  )
}
