// Fondo y tarjeta que comparten el login y la pantalla para externos
export default function MarcoAcceso({ children, ancho = 'max-w-[430px]' }) {
  return (
    <main className="fixed inset-0 m-0 flex max-w-none box-border overflow-x-hidden overflow-y-auto isolate px-4 py-8 text-[#e8eefc] bg-[radial-gradient(circle_at_92%_8%,rgba(249,178,20,0.85),rgba(249,178,20,0)_45%),radial-gradient(circle_at_10%_90%,rgba(1,72,152,0.6),rgba(1,72,152,0)_50%),linear-gradient(135deg,#061a3d_0%,#0a2a5c_55%,#12386f_100%)]">
      <div
        aria-hidden="true"
        className="absolute -right-[18%] top-[55%] -translate-y-1/2 h-[75%] aspect-[1248/822] bg-[url('/logo-ubb-escudo.png')] bg-center bg-no-repeat bg-contain opacity-10 -z-1 pointer-events-none max-[900px]:-right-[25%] max-[900px]:opacity-[0.04]"
      />
      <div className={`m-auto w-full ${ancho} box-border pt-9 px-8 pb-6 border border-[rgba(255,255,255,0.28)] rounded-[16px] bg-[rgba(16,38,82,0.55)] backdrop-blur-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-left`}>
        <div className="flex justify-center">
          <img className="h-21 w-auto" src="/logo-ubb-blanco.svg" alt="Universidad del Bío-Bío" />
        </div>
        {children}
      </div>
    </main>
  );
}
