import { SuppresesNavbar } from "@/components/ui/suprreses_navbar";
import { HeaderButtons } from "@/components/ui/header_buttons";
import { Recents } from "@/components/ui/recents";
export default function Home(){
    return (
        <div>
            <HeaderButtons />
            <div className="flex flex-row h-screen">

            <SuppresesNavbar />
            <Recents/>
            </div>
        </div>
    )
}