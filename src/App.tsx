import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      Hello
      <Button as={'a'} href={'/link'} variant={'secondary'}>
        First
      </Button>
      <Button variant={'secondary'}>Second</Button>
    </div>
  )
}
