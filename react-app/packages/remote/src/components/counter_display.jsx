import { useAtomValue, useSetAtom } from 'jotai'
import { countAtom } from '../share/counter_state'

export function CounterDisplay() {

const count = useAtomValue(countAtom)

return (
        <div>
          CountDisplay: count is {count} 
        </div>
        )
}
