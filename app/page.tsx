
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";


const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
          <CompanionCard
          id ="123"
          name = "Neura the Brainy Explorer"
          topic = "Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#a1f6ff"
          />
          <CompanionCard
              id ="456"
              name = "Countsy the Number Wizard"
              topic = "Derivatives & Integrals"
              subject="Maths"
              duration={30}
              color="#e9a1ff"
          />
          <CompanionCard
              id ="789"
              name = "Verba the Vocabulary Builder"
              topic = "English Literature"
              subject="Language"
              duration={30}
              color="#ffa1cb"
          />



      </section>

       <section className="home-section">
           <CompanionsList
               title ="Recently completed sessions"
               companions={recentSessions}
               classNames="w-2/3 max-lg:w-full"

           />
           <CTA />
       </section>

    </main>
  )
}

export default Page