import { Button } from "@/components/ui/button"
import Link from "next/link"





const LandingPage = () => {
    return (
        <div>
            landing page (unprotected)
            <div>
                <Link href="/Sign-In">
                    <Button variant={'secondary'}>
                        login
                    </Button>
                </Link>
            </div>
            <div>
                <Link href="/Sign-Up">
                    <Button className="text-lg" variant='ghost'>
                        SignUp
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default LandingPage
