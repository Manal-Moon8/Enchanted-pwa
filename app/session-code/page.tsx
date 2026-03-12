"use client";

import { useMemo, useState } from "react";

const ASSET_BASE = "/figma/code-session";

function CodeCell({ value }: { value?: string }) {
  const isComplete = Boolean(value);
  return (
    <div className="bg-[rgba(255,255,255,0.9)] flex h-[74px] items-center justify-center overflow-hidden rounded-[12px] shadow-[0px_0px_23.4px_0px_rgba(57,149,255,0.7)] w-[64px]">
      <p
        className={[
          'font-["ES_Peak_TRIAL:Bold",system-ui,sans-serif]',
          "h-[58px] w-[30px] shrink-0 text-center text-[48px] leading-[normal]",
          isComplete ? "text-[rgba(0,0,0,0.85)]" : "text-[rgba(0,0,0,0.3)]",
        ].join(" ")}
      >
        {value ?? "0"}
      </p>
    </div>
  );
}

function NumpadKey({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative block h-[50px] w-full rounded-[8.5px] select-none"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[8.5px]"
      >
        <span className="absolute inset-0 rounded-[8.5px] bg-[rgba(255,255,255,0.3)]" />
        <span className="absolute inset-0 rounded-[8.5px] bg-[#333] mix-blend-plus-lighter" />
      </span>
      <span className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 flex h-[65px] w-[125px] items-center justify-center font-['SF_Compact:Regular',system-ui,sans-serif] text-[23px] text-center text-[color:#595959]">
        <span className="leading-[28px]">{children}</span>
      </span>
    </button>
  );
}

export default function SessionCodePage() {
  const [digits, setDigits] = useState<string[]>([]);

  const cells = useMemo(() => {
    const padded = [...digits];
    while (padded.length < 4) padded.push(undefined as unknown as string);
    return padded.slice(0, 4);
  }, [digits]);

  function pushDigit(d: string) {
    setDigits((prev) => (prev.length >= 4 ? prev : [...prev, d]));
  }
  function backspace() {
    setDigits((prev) => prev.slice(0, -1));
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div
        className="relative overflow-hidden rounded-[64px] w-[402px] max-w-full h-[874px] max-h-[calc(100vh-2rem)]"
        style={{
          backgroundImage:
            "linear-gradient(23.85404791792061deg, rgb(13, 139, 251) 19.958%, rgb(9, 46, 156) 14.163%, rgb(138, 30, 100) 106.74%)",
        }}
      >
        {/* Stars background */}
        <div className="absolute left-1/2 top-[-38px] -translate-x-1/2 h-[1227.304px] w-[552.419px] flex items-center justify-center">
          <div className="flex-none rotate-[94.8deg]">
            <img
              alt=""
              src={`${ASSET_BASE}/bg-etoiles.png`}
              className="h-[454.06px] w-[1193.469px] max-w-none object-cover pointer-events-none"
            />
          </div>
        </div>

        {/* Status bar */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[402px] px-[24px] pb-[19px] pt-[21px] flex items-center justify-center gap-[154px]">
          <div className="flex h-[22px] flex-1 items-center justify-center pt-[1.5px]">
            <p className="font-['SF_Pro:Semibold',system-ui,sans-serif] text-[17px] leading-[22px] text-center whitespace-nowrap">
              9:41
            </p>
          </div>
          <div className="flex h-[22px] flex-1 items-center justify-center gap-[7px] pr-px pt-px">
            <img
              alt=""
              src={`${ASSET_BASE}/cellular.png`}
              className="h-[12.226px] w-[19.2px]"
            />
            <img
              alt=""
              src={`${ASSET_BASE}/wifi.png`}
              className="h-[12.328px] w-[17.142px]"
            />
            <img
              alt=""
              src={`${ASSET_BASE}/battery.png`}
              className="h-[13px] w-[27.328px]"
            />
          </div>
        </div>

        {/* Top logo */}
        <div className="absolute left-[91px] top-[98px] h-[107px] w-[220px]">
          <img
            alt="Mirokai Experience"
            src={`${ASSET_BASE}/mirokai-logo.png`}
            className="h-full w-full object-cover pointer-events-none"
          />
        </div>

        {/* Main content */}
        <div className="absolute left-[8px] top-[261px] w-[386.663px] flex flex-col items-center gap-[109px]">
          <div className="w-[301px] flex flex-col items-start gap-[16px]">
            <p className="font-['ES_Peak_TRIAL:Bold',system-ui,sans-serif] text-[24px] leading-[22px]">
              Entrez votre code de session
            </p>
            <p className="font-['Acumin_Variable_Concept:Regular',system-ui,sans-serif] text-[16px] leading-[22px] w-[263px]">
              Entrez le code indiqué sur votre billet pour commencer
              l’expérience.
            </p>
            <div className="w-[304px] flex items-center gap-[16px] shadow-[-3px_-1px_6px_0px_rgba(255,255,255,0.14),3px_1px_6px_0px_rgba(255,255,255,0.14)]">
              <CodeCell value={cells[0]} />
              <CodeCell value={cells[1]} />
              <CodeCell value={cells[2]} />
              <CodeCell value={cells[3]} />
            </div>
            <button
              type="button"
              className="w-full text-center font-['Acumin_Variable_Concept:Regular',system-ui,sans-serif] text-[11px] leading-[22px] underline-offset-2 hover:underline"
              onClick={() => setDigits([])}
            >
              Je ne trouve pas mon code de session
            </button>
          </div>

          {/* Numpad */}
          <div className="w-full flex flex-col items-start gap-[6px] px-[0px]">
            <div className="w-full flex gap-[6px]">
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("1")}>1</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("2")}>2</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("3")}>3</NumpadKey>
              </div>
            </div>
            <div className="w-full flex gap-[6px]">
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("4")}>4</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("5")}>5</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("6")}>6</NumpadKey>
              </div>
            </div>
            <div className="w-full flex gap-[6px]">
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("7")}>7</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("8")}>8</NumpadKey>
              </div>
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("9")}>9</NumpadKey>
              </div>
            </div>
            <div className="w-full flex gap-[6px]">
              <div className="flex-1 h-[50px]" />
              <div className="flex-1">
                <NumpadKey onClick={() => pushDigit("0")}>0</NumpadKey>
              </div>
              <div className="flex-1 h-[50px] relative rounded-[8.5px]">
                <button
                  type="button"
                  onClick={backspace}
                  className="absolute inset-0 flex items-center justify-center rounded-[8.5px]"
                  aria-label="Effacer"
                >
                  <span className="font-['SF_Compact:Regular',system-ui,sans-serif] text-[23px] text-[color:#595959] leading-[28px]">
                    􀆛
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute left-1/2 top-[826px] -translate-x-1/2 flex items-center gap-[6px]">
          <p className="font-['Acumin_Variable_Concept:Regular',system-ui,sans-serif] h-[16px] w-[157px] text-[14px] leading-[22px] text-center">
            Expérience propulsée par{" "}
          </p>
          <img
            alt="Enchanted Tools"
            src={`${ASSET_BASE}/enchanted-tools-horizontal.png`}
            className="h-[22px] w-[144px] object-cover pointer-events-none"
          />
        </div>
      </div>
    </main>
  );
}