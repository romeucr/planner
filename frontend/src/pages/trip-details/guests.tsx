import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 min-w-0">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica@email.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 min-w-0">
            <span className="block font-medium text-zinc-100">
              Doutora Rita
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              drita@email.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button size='full' variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
