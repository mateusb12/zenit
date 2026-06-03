import { buildInfo } from "@/data/buildInfo";

export function VersionInfoButton() {
  return (
    <div className="group relative flex items-center">
      <button
        type="button"
        aria-label={`Informações da versão ${buildInfo.version}`}
        className="grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-[10px] font-black leading-none text-white/65 transition-colors duration-200 hover:bg-white/12 hover:text-white focus:bg-white/12 focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        i
      </button>

      <div className="pointer-events-none absolute right-0 top-[calc(100%+10px)] z-[70] w-max max-w-[240px] translate-y-1 rounded-xl border border-white/15 bg-[#071a2e]/95 px-3 py-2 text-[11px] leading-[1.5] text-white/75 opacity-0 shadow-[0_14px_34px_rgba(7,26,46,0.28)] backdrop-blur-2xl transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <strong className="block text-white">Versão v{buildInfo.version}</strong>
        <span className="mt-0.5 block">Atualizado em {buildInfo.updatedAtLabel}</span>
      </div>
    </div>
  );
}
