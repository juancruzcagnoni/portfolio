import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export default function Tooltip({ children, content }) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="bg-primary dark:bg-secondary text-secondary dark:text-primary text-xs px-2 py-1 rounded-md"
            sideOffset={8}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-primary dark:fill-secondary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
} 