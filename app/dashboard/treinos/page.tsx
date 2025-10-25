import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Dumbbell } from "lucide-react"

export default function TreinosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Treinos</h2>
          <p className="text-muted-foreground mt-2">Gerencie todos os treinos dos seus alunos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Treino
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Ativo</span>
            </div>
            <CardTitle className="mt-4">Treino de Peito e Tríceps</CardTitle>
            <CardDescription>Para João Silva</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Exercícios:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium">60 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última execução:</span>
                <span className="font-medium">Hoje</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Ativo</span>
            </div>
            <CardTitle className="mt-4">Treino de Pernas</CardTitle>
            <CardDescription>Para Maria Santos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Exercícios:</span>
                <span className="font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium">75 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última execução:</span>
                <span className="font-medium">Ontem</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Pausado</span>
            </div>
            <CardTitle className="mt-4">Treino de Costas</CardTitle>
            <CardDescription>Para Pedro Costa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Exercícios:</span>
                <span className="font-medium">7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium">55 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última execução:</span>
                <span className="font-medium">3 dias atrás</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
