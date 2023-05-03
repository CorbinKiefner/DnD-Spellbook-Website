// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="A Comprehensive Casting Guide ">
        <hr></hr>
        <h1>Introduction</h1>
        <p>
            There is a lot of information necessary to understand how to cast magic in
            Dungeons & Dragons. The first requirement is that you are playing a class
            with access to magic, whether it be through arcane means or pact magic.
            It is important to note that every class can conditionally access magic
            depending on your build, however, listed below are the innate spellcasters.
        </p>
        <p>
            <strong>Caster Classes:</strong> Artificer, Bard, Cleric, Druid, Ranger, Paladin, 
            Wizard, Warlock, and Sorcerer.
        </p>

        <hr></hr>
       
        <h1>Spell Slots</h1>

        <p>
            <em>If you are playing one of these classes, that means you have immediate access
            to spellcasting! But spells are complicated, so where do you start?</em>
        </p>
        <p>
            Spells are not free to cast, they cost something called a Spell Slot, <em>or a Pact Slot
            if you're a Warlock.</em> These spell slots are not an unlimited resource, and you must
            manage your inventory of them in order to make sure you dont run out. You can think of
            spell slots like mana. Certain spells will cost a certain amount of mana, and if you
            dont have that particular mana, then you cant cast that spell.
        </p>
        <p>
            Don't fret if you do run out of spell slots however, they replenish over time! How much
            time it takes for your spell slots to replenish depends on your class, but most
            replenish over the course of a Long Rest. When you wake up feeling refreshed after a
            long nights sleep, chances are your spell slots will have returned.
        </p>
        <p>
            spell slots have levels, and you will have a set amount of spell slots of each level
            depending on which class you are and what level your character is. For example, 
            a level 1 wizard has two level one spell slots, while a level 3 wizard has four
            level one spell slots and two level two spell slots. If you want to cast a level two 
            spell, you need to spend a level two spell slot.
        </p>

        <hr></hr>

        <h1>Cantrips & Spells</h1>

        <p>
            Not all spells cost spell slots. There are very low level spells called cantrips, which
            are free to cast for any caster who has them. These spells are an unlimited resource,
            but because of this they are usually not very powerful outright. However, that doesn't mean
            that you should underestimate their usefulness. Cantrips are some of the strongest spells in 
            Dungeons & Dragons if you use them creatively. All spells exist for a reason, and its 
            up to you to figure out the best way to utilize these tools.
        </p>

    </Layout>
  )
}

export const Head = () => <Seo title="About" />

// Step 3: Export your component
export default AboutPage