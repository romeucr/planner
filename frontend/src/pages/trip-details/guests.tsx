import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";

interface Participants {
  id: string;
  name: string | null;
  email: string;
  isConfirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participants[]>();

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);
  
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants?.map((participant, index) => {
          return (
            <div key ={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 min-w-0">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block text-xs text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {participant.isConfirmed ? (
                <CheckCircle2 className="size-5 text-green-500" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400" />
              )}
            </div>
          );
        })}
      </div>
      <Button size="full" variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
