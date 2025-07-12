import { Send } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { ScrollArea } from "./components/ui/scroll-area"
import { Textarea } from "./components/ui/textarea"
import ReactMarkdown from "react-markdown"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum()
const dummyText = lorem.generateParagraphs(4)

function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="px-3 py-2">
          <p className="text-muted-foreground md:text-sm italic">this time added...</p>
        </div>
        <div className="flex flex-col h-full w-1/2 mx-auto gap-10 justify-center">
          <div>
            <Card className="py-0 px-6">
              <CardContent className="relative whitespace-pre-wrap px-1">
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white dark:from-background to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white dark:from-background to-transparent z-10" />

                <ScrollArea className="max-h-64 overflow-y-auto py-3">
                  <ReactMarkdown>
                    {dummyText}
                  </ReactMarkdown>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center gap-3 border-input rounded-md border px-3 py-2 shadow-xs md:text-sm">
            <Textarea
              className="border-0 focus-visible:border-0 focus-visible:ring-0 px-0 py-0 shadow-none resize-none"
              placeholder="Ask anything"
            />
            <Button size={"icon"} variant={"secondary"}>
              <Send/>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
