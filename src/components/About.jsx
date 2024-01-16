import React from 'react'

const About = () => {
  return (
    <div>
        <section>
        <div class="flex flex-col justify-center items-center">
          <h1 class="mt-30 text-center text-5xl text-white font-bold drop-shadow-lg">
          The memecoin inspired by the legend himself
          </h1>
          <p class="mt-5 lg:px-64 text-center text-xl text-white opacity-70">
          Born from the username of Drake on Stake.com, 'deeppockets6', where billions have been wagered, Deep Pockets embodies the thrill of high stakes and the allure of grand winnings. 
          Deep Pockets is not just a memecoin; it's a tribute to the audacity and grandeur of online gaming, exemplified by Drake's remarkable wagering of billions on Stake.com. 
          Operating on the Solana blockchain, Deep Pockets merges the worlds of music, gaming, and crypto into one thrilling experience, offering a token that represents more than value – it symbolizes an adventurous lifestyle.
          </p>
          <button
            type="button"
            class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-4 text-center me-2 mb-2"
          >
            Buy Now!
          </button>
        </div>
      </section>
    </div>
  )
}

export default About