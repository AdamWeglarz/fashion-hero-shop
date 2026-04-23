interface EditFallbackSeparatorProps {
  text?: string;
}

export function EditFallbackSeparator({ 
  text = "Uzupełnij stylizację z FashionHero" 
}: EditFallbackSeparatorProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <span className="flex-1 h-[1px] bg-edit-gold" />
      <span className="text-[11px] font-light tracking-[0.2em] text-edit-gold">
        — — — {text} — — —
      </span>
      <span className="flex-1 h-[1px] bg-edit-gold" />
    </div>
  );
}
