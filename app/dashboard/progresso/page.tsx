import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Calendar, Award } from "lucide-react"

export default function ProgressoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Meu Progresso</h2>
        <p className="text-muted-foreground mt-2">Acompanhe sua evolução e conquistas</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treinos Completos</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sequência</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 dias</div>
            <p className="text-xs text-muted-foreground">Recorde: 18 dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carga Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5 ton</div>
            <p className="text-xs text-muted-foreground">+15% este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conquistas</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Desbloqueadas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Evolução Semanal</CardTitle>
          <CardDescription>Seus treinos nos últimos 7 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Seg</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "85%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">85%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Ter</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "100%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">100%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Qua</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "90%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">90%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Qui</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "95%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">95%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Sex</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "100%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">100%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Sáb</div>
              <div className="flex-1 h-8 bg-primary/20 rounded-md flex items-center px-3">
                <div className="h-4 bg-primary rounded-sm" style={{ width: "75%" }} />
              </div>
              <span className="text-sm font-medium w-12 text-right">75%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm text-muted-foreground">Dom</div>
              <div className="flex-1 h-8 bg-muted rounded-md flex items-center px-3">
                <span className="text-xs text-muted-foreground">Descanso</span>
              </div>
              <span className="text-sm font-medium w-12 text-right">-</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
