import { CircleCheck, Plus } from "lucide-react";

interface CreateActivityModalProps {
  openCreateActivityModal: () => void;
}

export function Activities({
  openCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">Atividades</h2>
        <button
          onClick={openCreateActivityModal}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          <Plus className="size-5" />
          Cadastrar atividade
        </button>
      </div>
      <div className="space-y-8">
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
            <span className="text-xs text-zinc-500">Sábado</span>
          </div>
          <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
        </div>
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>
          <div className="space-y-2.5">
            <div className=" px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:00</span>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className=" px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
