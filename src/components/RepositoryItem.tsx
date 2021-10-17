interface RepositoryItemProps {
  name: string
  description: string
  html_url: string
}

export function RepositoryItem({ name, description, html_url }: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url}>Acessar repositórios</a>
    </li>
  )
}
