import { CheckedMark } from '@/assets/icons/CheckedMark'
import { Checkbox } from '@/components/ui/checkbox'

export const App = () => {
  return (
    <div>
      hello
      <Checkbox checked icon={<CheckedMark />} />
      <Checkbox icon={<CheckedMark />} />
    </div>
  )
}
