import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      Hello
      <Button as={'a'} href={'/link'} variant={'secondary'}>
        First1
      </Button>
      <Button variant={'secondary'}>Second2</Button>
    </div>
  )
}
