<template>
  <Layout>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <!-- The big Detroit grafitti backdrop of Jazz musicians -->
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1572506634451-4df8fc2f1d3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <!-- Lead in intro -->
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Welcome to...
                </h1>
                <h2 class="mt-4 text-4xl text-gray-300">
                  Bournemouth Big Band Swing and Jazz Club
                </h2>
                <p class="mt-4 text-lg text-gray-300">
                  Invite you to an evening of recorded jazz in...
                </p>
                <p class="mt-4 text-lg text-gray-300">
                  Room 1, Ground Floor, Kinson Community Centre on the 2nd Wednesday of each month at 6:30pm
                </p>
                <p class="mt-4 text-xl text-gray-300">
                  Entry fee £3 (includes free refreshments)
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Events, newsletters and reviews -->
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold" id="events">Presentations</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Presentations, talks, concerts and more
                  </p>
                 <ul class="text-lg sm:text-xl">
                    <li v-for="event in $page.events.edges" :key="event.id">
                      <a class="text-gray-800" :href="event.node.newsletter.asset.url">{{ event.node.title}} Event (PDF)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold" id="newsletters">Newsletters</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Monthly member newsletters (downloadable format)
                  </p>
                  <ul class="text-lg sm:text-xl">
                    <li v-for="post in $page.posts.edges" :key="post.id">
                      <a class="text-gray-800" :href="post.node.newsletter.asset.url">{{ post.node.title}} Newsletter (PDF)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Reviews</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Discover our review articles (downloadable format)
                  </p>
                  <ul class="text-lg sm:text-xl">
                    <li v-for="review in $page.reviews.edges" :key="review.id">
                      <a class="text-gray-800" :href="review.node.newsletter.asset.url">{{ review.node.title}} (PDF)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-orange-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal" id="about">
                Who are we? Find out and join us!
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                The Bournemouth Big Band Swing and Jazz Club meets on the second Wednesday of each month (6.30 - 8.45pm) in Room 1, Ground floor of the Kinson Community Centre Bournemouth.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Currently we have around 25 active members (Ladies and Gents) who all share a common interest in recorded Jazz music of all kinds. This can (and frequently does) range from early Dixieland to Modern Jazz via Mainstream and Big Band.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >The normal format of each meeting is simple - 3 members will each present 40 programme minutes of recorded Jazz music of their own choice - usually with a clever or interesting theme.


              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >We have state of the art equipment so the sound quality is superb. After the first two 35 minute long presentations there is a break of around 20 minutes for tea/coffee and biscuits and a chance to socialise. Occasionally we have a guest speaker.


              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >New members are most welcome so why not come along and join us, your first evening will be totally free of charge. If you like what you hear and see then we would love you to join us as a permanent member.


              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >There is a one-off annual cost of £4 which makes you a member of the Kinson CC and the entry fee for each meeting is just £3 which covers the cost of your refreshment as well as a fantastic evening of recorded jazz music.


              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >After each Meeting we send out a newsletter via email to all members with album and personnel details about all the music played.


              </p>
              <a
                href="https://www.creative-tim.com/framework/tailwind-starter-kit"
                class="font-bold text-gray-800 mt-8"
                >A really great way to meet folk who all love jazz music.</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="jazzlogo.png?width=439&key=84e6332"
                  class="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64"></div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
              <form
              name="contact"
              class="mb-12"
              method="post"
              action="/success/"
              v-on:submit.prevent="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold" id="contact">Want to join us?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Full Name</label
                    ><input
                      name="name"
                      id="name"
                      v-model="formData.name"
                      required
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      name="email"
                      id="email"
                      v-model="formData.email"
                      required
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Message</label
                    ><textarea
                      name="message"
                      id="message"
                      v-model="formData.message"
                      required
                      rows="4"
                      cols="80"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit" value="submit"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Send Message
                    </button>
                  </div>
                  <!-- <div v-if="thanks" class="bg-orange-900 rounded-full p-1 font-semibold text-lg text-center mt-4">Thanks your message has been sent </div> -->
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    </div>


    </div>



  </Layout>
</template>

<page-query>
query Posts {
  events: allSanityEvent (sortBy: "publishedAt", order: DESC) {
    edges {
      node {
        id
        title
        publishedAt (format: "MMMM D, Y")
        newsletter {
          asset {
            url
          }
        }
        _rawExcerpt
      }
    }
  }
  posts: allSanityNewsletter (sortBy: "publishedAt", order: DESC, limit: 4) {
    edges {
      node {
        id
        title
        publishedAt (format: "MMMM D, Y")
        newsletter {
          asset {
            url
          }
        }
      }
    }
  }
  reviews: allSanityReview {
    edges {
      node {
        id
        title
        newsletter {
          asset {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import BlockContent from '~/components/BlockContent'
export default {
  components: {
    BlockContent
  },
  data() {
    return {
      formData: {}
      //thanks: false
    }
  },
  methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => {
      //console.log('debuggio', this.body)
      this.$router.push('/success')
    })
    .catch(error => alert(error))
  }
},

  metaInfo: {
    title: 'Home'
  }
}
</script>

