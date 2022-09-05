import React from 'react'
import gym2 from "../../img/gym2.png"

const About = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{margin:"100px"  }}>ABOUT OUR GYM</h1>

    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={gym2}/>
    <div class="text-center lg:w-2/3 w-full">
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro laboriosam nostrum consequuntur amet! Saepe adipisci animi eum ipsum quos itaque perspiciatis consequatur, eos tempore vel! Praesentium accusantium sapiente illo.</p>
      <div class="flex justify-center">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sed autem consequatur, fugit magni debitis incidunt similique alias porro laborum atque odit, itaque a voluptatum fugiat quas neque excepturi laboriosam!lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, deserunt? Suscipit amet harum accusamus inventore saepe velit illum. Beatae harum architecto veritatis odit fugit debitis at voluptatum aliquid! Dignissimos, maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quo similique facilis necessitatibus quidem suscipit. Mollitia praesentium est quidem iste eos esse necessitatibus, voluptatum accusamus voluptates nobis, assumenda, enim magnam?
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, sapiente. Soluta omnis, illo deserunt numquam quas reprehenderit repudiandae sapiente obcaecati ex voluptatem quidem itaque sunt excepturi velit eius porro libero!</p>
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
