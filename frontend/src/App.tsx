import { Send } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { ScrollArea } from "./components/ui/scroll-area"
import { Textarea } from "./components/ui/textarea"
import ReactMarkdown from "react-markdown"
import { LoremIpsum } from "lorem-ipsum"
import { useState } from "react"
import { Input } from "./components/ui/input"

const lorem = new LoremIpsum()
const dummyText = lorem.generateParagraphs(4)

function App() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState(dummyText)
  const [password, setPassword] = useState("")
  const [hasPassword, setHasPassword] = useState(false)

  const handleClick = async () => {
    if (!query.trim()) {
      setQuery("")
      return
    }
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-api-key": password
        },
        body: JSON.stringify({ query })
      })

      if (res.status === 401) {
        setResponse("You have provided an invalid password. Refresh the page and try again.")
        setQuery("")
        return
      }

      const data = await res.json()
      setResponse(data.response)
    } catch (err) {
      console.error("API error:", err)
      setResponse("Something went wrong, please try again")
    }

    setQuery("")
  }

  const handleQueryKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey){
      e.preventDefault()
      handleClick()
    }
  }

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setHasPassword(true)
    }
  }

  if (!hasPassword) {
    return (
      <div className="flex w-1/4 mx-auto items-center h-screen">
        <Input 
          placeholder="Please enter the password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handlePasswordKeyDown}
        />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="px-3 py-2">
          <p className="text-muted-foreground md:text-sm italic">this time added...</p>
        </div>
        <div className="flex flex-col h-full w-1/2 mx-auto gap-10 justify-center">
          <div>
            {response && <Card className="py-0 px-6">
              <CardContent className="relative whitespace-pre-wrap px-1">
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white dark:from-background to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white dark:from-background to-transparent z-10" />

                <ScrollArea className="max-h-64 overflow-y-auto py-3">
                  <ReactMarkdown>
                    {response}
                  </ReactMarkdown>
                </ScrollArea>
              </CardContent>
            </Card>}
          </div>
          <div className="flex items-center gap-3 border-input rounded-md border px-3 py-2 shadow-xs md:text-sm">
            <Textarea
              className="border-0 focus-visible:border-0 focus-visible:ring-0 px-0 py-0 shadow-none resize-none"
              placeholder="Ask anything"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleQueryKeyDown}
            />
            <Button size={"icon"} variant={"secondary"} onClick={handleClick}>
              <Send/>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
