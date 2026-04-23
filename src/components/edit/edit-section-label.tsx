interface EditSectionLabelProps {
  label: string;
  subtitle?: string;
  centered?: boolean;
}

export function EditSectionLabel({ label, subtitle, centered = true }: EditSectionLabelProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="block text-[11px] font-light tracking-[0.3em] text-edit-gold uppercase mb-3">
        {label}
      </span>
      {subtitle && (
        <h2 className="font-serif text-[28px] text-edit-graphite">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
