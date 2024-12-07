import { Button } from "@/components/ui/button"
import { ListRestart, Mail } from "lucide-react"
import React from "react"

const TechIcon:React.FC<TechIconProps> = ({src, alt, title}) => {
    return(
        <div className="grayscale hover:grayscale-0 duration-300">
            <img width="50" src={src} alt={alt} title={title}/>
        </div>
    )
}

const Settings:React.FC<SettingsProps> = () => {
    return(
        <div className="relative">
            <div className="-z-50 top-0 left-0 absolute w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{
                    top: 0,
                    left: 0,
                    opacity: 1,
                    width: "100%",
                    height: "50%",
                    zIndex: 1,
                    }}
                >
                    <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#e54f95", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#4a328a", stopOpacity: 1 }} />
                    </linearGradient>
                    </defs>
                    <path
                    d="M0,64L30,69.3C60,75,120,85,180,101.3C240,117,300,139,360,133.3C420,128,480,96,540,90.7C600,85,660,107,720,122.7C780,139,840,149,900,133.3C960,117,1020,75,1080,74.7C1140,75,1200,117,1260,128C1320,139,1380,149,1410,154.7L1440,160V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                    fill="url(#wave-gradient)"
                    />
                </svg>
            </div>
            <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14">
                <div className="flex justify-between items-center gap-4">
                    <p className="text-4xl text-white font-sans font-semibold select-none">O aplikaci</p>
                    <Button className="bg-fosterPink hover:bg-fosterPink/90 text-white px-4 py-2 rounded-3xl" onClick={() => window.open('mailto:adam446643@gmail.com')}><Mail/>Napsat email</Button>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl animate-in duration-1000">
                    <p className="text-xl font-sans font-semibold">Použité technologie</p>
                    <div className="flex gap-4 flex-wrap justify-between">
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/>
                        <TechIcon src="https://github.com/user-attachments/assets/e4bd419a-2a4a-459a-ba9a-d3324e693c4d" alt="ShadCn UI" title="ShadCn UI"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
                        <TechIcon src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/50342602-8025-4030-b492-550f2eaa4073" alt="RabbitMQ" title="RabbitMQ"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/>
                        <TechIcon src="https://user-images.githubusercontent.com/25181517/182534006-037f08b5-8e7b-4e5f-96b6-5d2a5558fa85.png" alt="Kubernetes" title="Kubernetes"/>
                        <TechIcon src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" alt="Cypress" title="Cypress"/>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl animate-in duration-1000">
                    <p className="text-xl font-sans font-semibold">Další použité nástroje</p>
                    <div className="flex flex-col gap-4">
                        <p>
                            <span className="font-semibold">Animated emoji:</span> Knihovna animovaných Noto emoji dostupná na
                            <a href="https://googlefonts.github.io/noto-emoji-animation/"> https://googlefonts.github.io/noto-emoji-animation/ </a>
                            pod licencí <a href="https://creativecommons.org/licenses/by/4.0/legalcode">CC BY 4.0</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;