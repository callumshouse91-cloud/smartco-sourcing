interface PagePlaceholderProps {
  title: string
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <div className="p-6">
      <h1 className="font-display text-2xl font-semibold text-navy">{title}</h1>
    </div>
  )
}
