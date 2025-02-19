import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
// import { Input } from "@/components/input";
import{ArrowRight, Copy} from "lucide-react"

export default function Home() {
  return (
    <main>
      <Button type="submit"> 
        enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

    {/* <Input type="email" placeholder="Digite o seu Email" />
    <Input type="email" placeholder="Digite o seu Email" error/> */}

    </main>
  );
}
