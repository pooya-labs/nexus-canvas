"use client";

import React from "react";
import TopBar from "../components/TopBar";
import InteractiveCanvas from "../components/InteractiveCanvas";
import NodeInspectorPanel from "../components/NodeInspectorPanel";
import ExportCodeModal from "../components/ExportCodeModal";

export default function NexusCanvasPage() {
  return (
    <div className="min-h-[100svh] nexus-bg flex flex-col">
      <TopBar />

      <main className="flex-1 min-w-0 max-w-[1720px] w-full mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-8 min-w-0">
            <InteractiveCanvas />
          </div>
          <div className="lg:col-span-4 min-w-0">
            <NodeInspectorPanel />
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-white/10 bg-[#030711]/90 px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-2">
              <img src="https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram.webp" alt="Pooya Labs" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{lang === "fa" ? "ساخته‌شده توسط پویا گودرزی" : "Built by Pooya Goodarzi"}</p>
              <p className="mt-1 text-xs text-slate-500">{lang === "fa" ? "بخشی از اکوسیستم Pooya Labs" : "Part of the Pooya Labs ecosystem"}</p>
            </div>
          </div>
          <nav aria-label="Creator links" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-400">
            <a href="https://github.com/pooya-labs" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300">GitHub</a>
            <a href="https://pooya-labs.github.io/pooya-labs-platform/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-emerald-300">
              <img src="https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram.webp" alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
              Pooya Labs Platform
            </a>
          </nav>
        </div>
      </footer>

      <ExportCodeModal />
    </div>
  );
}