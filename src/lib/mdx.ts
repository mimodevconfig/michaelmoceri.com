// Import mock data instead of using fs/path which are Node.js modules
import { PostMeta, Post } from '../types/blog';

// Sample blog posts data (in a real app, this would be fetched from an API)
const blogPosts: Post[] = [
  {
    title: "ARE YOU READY FOR THE NEW SUPPLY CHAIN?",
    date: "2023-07-11",
    excerpt: "Big companies may come knocking at your door as supply chains adjust after COVID-19. Will your 3D printing business be ready?",
    author: "Michael Moceri",
    category: "Manufacturing",
    tags: ["3D Printing", "Supply Chain", "COVID-19", "Manufacturing", "Business"],
    coverImage: "/images/blog/covers/ship1.avif",
    slug: "ready-for-new-supply-chain",
    content: `
# ARE YOU READY FOR THE NEW SUPPLY CHAIN?

Originally published at [3dprintingindustry.com](https://3dprintingindustry.com/news/are-you-ready-for-the-new-supply-chain-171073/) on April 27, 2020. Written by Mike Moceri.

Big companies may come knocking at your door as supply chains adjust after COVID-19. Will your 3D printing business be ready?

_By Mike Moceri, founder and CEO,_ _MakerOS_

![](/images/blog/covers/ship1.avif)

Earlier this month during a Saturday press conference, Governor Andrew Cuomo of New York State said this:

_"China is, remarkably, the repository for all of these orders – ventilators, PPE – it all comes back to China, which in the long term, we have to figure out why we wound up in this situation, where we don't have the manufacturing capacity in this country. I understand supply chain issues, I understand the cost of manufacturing, but there's a public health reason why we learned the hard way why_ **_we need the capacity in this country to do this._**_"_

Many experts echo the governor's point. The COVID-19 global pandemic is exposing how incredibly fragile the modern global supply chain is. Many companies experienced some kind of supply chain disruption due to the coronavirus, and some did not have a plan to deal with the disruption.

It's becoming abundantly clear that heavy dependence on a single source for materials and parts is no longer sustainable, particularly if that source is overseas. The coronavirus may very well have jump-started the fourth industrial revolution, where industry becomes more reliant on modern societal components including 3D printing.

In [a recent article in the Atlantic](https://www.theatlantic.com/ideas/archive/2020/03/supply-chains-and-coronavirus/608329/), David Simchi-Levi, an MIT professor who studies supply chains and logistics, said, "companies will come under pressure to diversify where they make their products." Relying solely on outsourcing is out. Companies are already scrambling to find parts from alternative sources. These alternative sources will either become a permanent backup or the new main supplier – and those sources might just be you.

If you're a small or medium-sized 3D printing service with less than 50 employees, you're nimble and agile enough to turn around orders faster than any overseas supplier. Large companies may very well turn to you as we enter the fourth industrial revolution. But is your workflow ready to manage bulk orders from Fortune 500 companies?

Back in 2013, while I was running a 3D printing service bureau, my team and I received an order from a Fortune 500 company to print over 10,000 individual parts for a toy line. The project was challenging. Eventually, I realized that, considering how immensely large the job was, [we should have priced about 70% more](https://3dprintingindustry.com/news/youre-pricing-wrong-how-to-better-price-your-3d-printing-projects-168312/) than what we originally quoted. This realization ultimately led me to start a company to help 3D printing and fabrication companies better quote and manage projects. That company is called [MakerOS](https://makeros.com/?utm_source=3dprintingindustry&utm_medium=referral&utm_campaign=3dpindustry-aprilstandard-2020).

MakerOS is a collaboration platform for digital fabrication and 3D printing companies to improve client workflows. What exactly is a collaboration platform, in the context of a 3D printing company?

Take a second to think about all of the tools you usually use to manage day-to-day operations at a 3D printing company. You typically have a manual quoting process to price out new projects with spreadsheets. You have 3D viewers and CAD tools for analysis. You may use an internal project management platform to ensure optimal workflow. You have an online file hosting service to share and access files. You have an inventory management system to track materials and services. You have an accounting system to execute billing and invoices, and of course, you have email to communicate with clients and employees. All of these tools facilitate collaboration and communication, and effective collaboration and communication lead to successful projects.

We consolidated all of these tools into one platform that is specifically designed for 3D printing and digital fabrication services.

For clients, the platform is a secure, online hub to log in and submit projects, communicate with the service, view updates, upload and access files, and pay invoices.
For a 3D printing or fabrication service, that platform is a secure, online dashboard to manage projects, to communicate with clients AND the rest of the team, to find and collect all files in one place, to view all relevant files, and to get paid.
For everyone, it's a collaboration platform.

Because the platform is all online, the web-based software enables managers to remotely manage both clients and teams from home. And so while it may be perceived that 3D printing companies cannot work remotely because of the nature of the status quo processes, the MakerOS collaboration platform makes working as a distributed team a realistic possibility.

Our clients have had huge successes using the platform. Within the first year of using the MakerOS software, one of our clients reduced their development cycle from three weeks to just 4 days and increased their revenue ten-fold.

Another one of our clients, an industrial 3D printing service, spent 10 months trying several other systems but kept landing back with MakerOS after realizing that other 3D printing software could not manage projects beyond the quoting phase.

Their VP and Co-founder said, "MakerOS has helped us organize everything, stay on top of client communication, and see the statistics of our service over time. It's also increased the quality of how we process orders, which has translated directly to more orders being processed."

You, too, can accomplish these wins and be ready for the fourth industrial revolution.

###

About the Author, Mike Moceri

Mike Moceri has deep experience in manufacturing, design, and software. In 2013, he co-founded the world's first 3D printing retail service bureau in Chicago. In 2014 he founded Manulith, a 3D printing and product design agency, where his clientele included Fortune 500 companies within the aerospace, automotive, and medical industries. Mike is also a mentor at Stanley+Techstars Additive Manufacturing Accelerator, a mentor at WeWork Labs in NYC, and formerly a mentor at TechTown Detroit. He's previously been featured on MSN, Make Magazine, NBC, and the Encyclopedia Britannica. D-Business Magazine called him the "Face of 3D printing," and 3Dnatives named Mike one of "The Most Influential Personalities of Additive Manufacturing in 2020."

Mike was the founder and CEO of MakerOS, an all-in-one business operating software for manufacturers, engineers, designers, and fabricators to facilitate modern product development. Shapeways acquired MakerOS in April 2022.
    `
  },
  {
    title: "How I Built a 3D Printing Business in a Bubble and Survived",
    date: "2023-07-11",
    excerpt: "Magazine covers, Netflix documentaries, and daily news segments talking about how 3D printing took over the world of tech and gave everyone an impassioned vision of the future.",
    author: "Michael Moceri",
    category: "Entrepreneurship",
    tags: ["3D Printing", "Business", "Startup", "Manufacturing", "Technology"],
    coverImage: "/images/blog/covers/mag_covers.avif",
    slug: "3d-printing-business-in-bubble",
    content: `
# How I Built a 3D Printing Business in a Bubble and Survived

Originally published on [3dprint.com](https://3dprint.com/253695/how-i-built-a-3d-printing-business-in-a-bubble-and-survived/) on September 19, 2019. Written by Mike Moceri.

###### Let's rewind to 2013.

Magazine covers, Netflix documentaries, and daily news segments talking about how 3D printing took over the world of tech and gave everyone an impassioned vision of the future.

The ways 3D printing could be applied to modern problems seemed limitless.

![](/images/blog/covers/mag_covers.avif)

This was everywhere in 2013.

3D printing was going to revolutionize everything and companies from every corner of the internet were coming out of the woodwork to get a piece of the action.

Communities like RepRap were forming, projects were being brought to life through crowdfunding, and even surprise venture capital backed startups were all adding to the hype. Then there were also the "big guys" like Stratasys and 3D Systems cashing in by acquiring more companies than they could handle and promising their shareholders the moon.

As all of this was bubbling up, people were sent into a frenzy as the media told them not to miss out on the next "industrial revolution." Dumb money and bad ideas were everywhere.

###### What could go wrong?

"TOUR DE RUST BELT"

In 2013, I co-founded 3DPX in Chicago with an eclectic group of passionate dreamers that were hellbent on bringing this technology to the masses. Then in 2014, I founded Manulith in Detroit to service the automotive, aerospace and medical industries and help them rapidly prototype new technologies. Throughout both of those businesses, I was taking the lessons learned and bootstrapping what would ultimately become MakerOS.

![](/images/blog/content/3dpx_shop_floor.avif)

The 3DPX Showroom in Chicago

I was every bit a part of the 3D printing hype machine of 2013-2015. However, while the industry has changed since those early days I've seen a few things stand the test of time:

###### People don't care how their thing is made.

All they care about is if it's made on time, within budget, and meets their quality expectations.

This is extremely relevant to the term "3D Printing" as it has been characterized as the apex of manufacturing that will make things faster, cheaper, and easier. It's better to consider it as part of an ecosystem where it's applied in the appropriate context.

Most clients will have a hard time conceptualizing how their products are made which makes it difficult to share progress throughout development.

Before starting a project ask yourself: what is your client expecting to see along the way?

###### Trying to sell complicated tools to consumers is a bad idea. Focus on B2B.

Everyone can own a hammer, but not everyone is capable of building a birdhouse. This applies equally well to computers and software too.

Both hardware and software startups have a knack for thinking that they can take a generally complex process and distill it down to a consumer-facing product.

We saw this as MakerBot shifted from "everyone should own one" to "this is for professionals and educators".

The same is true of 3D printing marketplaces that originally catered to the consumer/hobbyist crowd who then later reposition their platforms to professionals.

Before launching a product or service, do a clear audit of the different use cases of how it can be used.

Ask yourself: who will this benefit most?

###### The media is irresponsible when it comes to new technology.

All new technology goes through a hype cycle.

When computers were first hooked up to the internet there was mass hysteria that everything would be hacked. Drones were hot then the media told us to fear them. 3D printing was the darling technology meant to help kids with their physical handicaps, then the media turned their attention to a megalomaniac wielding a 3D printed weapon.

Then last year they were saying Bitcoin was going to replace money, and all of a sudden it was for criminals.

Control the narrative of your technology/product/industry before someone tells it for you.

###### Large OEM's have their hands tied when it comes to innovation.

In 2014 GM's 3D printing facility in Southfield, Michigan, flooded and destroyed $30M of equipment. Their engineering team approached me at Manulith asking if I could help with their backlog of prototypes they still needed to produce.

Exactly the work we were set up for, however, we didn't get the job.

It all came down to the purchasing department requiring a Dun and Bradstreet score and other qualifications to allow us into their system.

Be prepared to run into politics and policies where you have no control.

###### It's never been easier to start, but it's never been harder to scale.

It's incredibly expensive and burdensome to run a product development and fabrication service. When starting our fabrication businesses, we easily acquired everything we needed to get started. But, little did we know about the storm we would have to go through to scale our operations.

It's going to be your job to find efficiencies in everything you do.

This was our process and from our research, this is how most product based services operate.

###### Marketplaces don't work for you. You work for the marketplace.

Sites like Upwork or Fiverr have made it easier to begin or sustain a career as an independent contractor. The trouble, however, is that these marketplaces put you up against thousands of other people with similar skills and those early adopters or "highly" rated get all the business. The platforms don't care who gets the work, so long as work is getting done so they can make their cut on each transaction.

A sense of professionalism is needed for people to move beyond the marketplaces. To grow, you'll need to expand your capabilities and be a part of a supplier network that allows you to leverage the skillsets of others.

The key to survival is to do things that scale your business automatically.

###### Network like hell.

The last and more important thing is to network like hell.

It's dangerous to try any of this alone. Communities, incubators, meetups, anything you can do to expand your network will benefit you in the long run. Be someone that helps other people tell their story. Become their go-to person as someone who helped them become successful. Learn how to play the game. Politics are everywhere and the sooner you're able to learn how to navigate them the better off you'll be.

###

### About the Author, Mike Moceri 
Mike Moceri has deep experience in manufacturing, design, and software. In 2013, he co-founded the world's first 3D printing retail service bureau in Chicago. In 2014 he founded Manulith, a 3D printing and product design agency, where his clientele included Fortune 500 companies within the aerospace, automotive, and medical industries. Mike is also a mentor at Stanley+Techstars Additive Manufacturing Accelerator, a mentor at WeWork Labs in NYC, and formerly a mentor at TechTown Detroit. He's previously been featured on MSN, Make Magazine, NBC, and the Encyclopedia Britannica. D-Business Magazine called him the "Face of 3D printing," and 3Dnatives named Mike one of "The Most Influential Personalities of Additive Manufacturing in 2020." Mike was the founder and CEO of MakerOS, an all-in-one business operating software for manufacturers, engineers, designers, and fabricators to facilitate modern product development. Shapeways acquired MakerOS in April 2022.
    `
  },
  {
    title: "How to Make More Money at Your 3D Printing Shop",
    date: "2023-07-11",
    excerpt: "From a high-level perspective, you can categorize clients of 3D printing service shops into one of two buckets: transactional clients and relationship-based clients.",
    author: "Michael Moceri",
    category: "Business",
    tags: ["3D Printing", "Business Strategy", "Client Management", "Revenue", "Manufacturing"],
    coverImage: "/images/blog/covers/mos_dash1.avif",
    slug: "make-more-money-3d-printing-shop",
    content: `
# How to Make More Money at Your 3D Printing Shop

Originally published at [3dprint.com](https://3dprint.com/277592/how-to-make-more-money-at-your-3d-printing-shop/) on December 18, 2020. Written by Mike Moceri.

![](/images/blog/covers/mos_dash1.avif)

From a high-level perspective, you can categorize clients of 3D printing service shops into one of two buckets.

Some clients tend to be more transactional in how they conduct business. They prefer to submit new projects through your project submission portal, they share quick notes, they review and accept your quotes, they confirm their project has been received, and then it's off to the races with their order.

Transactional clients are efficient and nice to have in bulk (they're great if you're a print farm or specialize in bridge manufacturing) but they also tend to be price-sensitive and may not stick with you for too long if they decide to shop around and find a cheaper alternative.

Then there are clients who may require more consultation and tend to be more hands-on in the process. They ask more questions, they require status updates, they seek a better understanding of your process, they want to tap into your expertise. They are prone to be more collaborative, and over time as you work more and more together, you develop a mutual partnership. These are relationship-based clients, and these are the types of clients you should seek out and cultivate. Here is why.

Relationship-based clients tend to be high-value ones because you'll most likely retain them over a longer period of time, and as is the case in any industry, high retention rates are good for business. High-value clients don't want to be transactional, they want to collaborate and work with a partner. In growth marketing, there's a metric called "Lifetime Value," or LTV, which is a calculated dollar amount for how much a customer will pay you over the course of their patronage to your business. Taking that concept and applying it to machine shops, the LTV of relationship-based clients is high.

Those two client distinctions became apparent to me while running 3D printing service bureaus in Chicago and Detroit for several years. My best clients in terms of both financial gain and project success were the ones that I developed strong business relationships with over time.

The challenge was in balancing those relationship-based, high-value clients with my transactional ones. I wanted to allocate more of my time to my relationship-based clients, but providing quotes and estimates to transactional clients was an equally tedious task and took up almost an equal amount of time and maintenance. I was limited by the software tools at my disposal: my project intake forms, my file-sharing system, email for communication, and others. These tools were disparate and time-consuming and in order to grow my business, I need something better.

I wanted to cultivate better relationships with clients to grow my service bureaus but was hindered by technology. I knew that in order to grow my business, I needed a solution that enabled me to cater to both relationship-based and transactional clients, and this was a big part of why I created MakerOS.

![](/images/blog/content/makeros_product1.avif)

MakerOS is an all-in-one business operating software for manufacturers, engineers, designers, and fabricators to facilitate modern product development. In regards to managing client relationships, the platform is built for seamless and efficient management of both transactional and relationship-based clients because of the Client Portal.

The Client Portal allows any client to start a project, upload files, see project statuses, and communicate with your team. What makes our Client Portal unique is how flexible its capabilities are when managing transactional and relationship-based clients.

For transactional clients, you can quickly create quotes via the Autoquoter, upload and comment on files, message back and forth, and get projects started. You can save quotes and estimates that either you, as the administrator, or your client via the Client Portal, can reference and use later. You can even send them a link to an invoice that does not require your client to create an account and log in to pay you if they prefer not to. The Client Portal is designed to give a lot of autonomy to your client if they prefer to do more themselves, allowing you to be more hands-off in the process.

For relationship-based clients, the platform's flexibility allows you to do the exact opposite. You can be more consultative, communicate more frequently, and develop the relationship all within the Client Portal. MakerOS allows for natural conversations, and those conversations are synced in the same project with all previous records. The paper trail is there; the conversations, files, updates, and billing are all in one place. The client does not need to search for anything in their inbox or shared folders, everything is centralized and easily accessible. With that quality of service, it's less complex for a client to collaborate with a partner who uses MakerOS. They will keep coming back to you as a recurring client. You're more than likely going to retain their business and build the relationship if you have a client within MakerOS as opposed to outside of it.

MakerOS is the best value for growing businesses that need to maintain transactional and relationship-based clients. Try MakerOS for free for 30 days, or contact us with any questions, we'd be more than happy to talk shop.

###

About the Author, Mike Moceri

Mike Moceri has deep experience in manufacturing, design, and software. In 2013, he co-founded the world's first 3D printing retail service bureau in Chicago. In 2014 he founded Manulith, a 3D printing and product design agency, where his clientele included Fortune 500 companies within the aerospace, automotive, and medical industries. Mike is also a mentor at Stanley+Techstars Additive Manufacturing Accelerator, a mentor at WeWork Labs in NYC, and formerly a mentor at TechTown Detroit. He's previously been featured on MSN, Make Magazine, NBC, and the Encyclopedia Britannica. D-Business Magazine called him the "Face of 3D printing," and 3Dnatives named Mike one of "The Most Influential Personalities of Additive Manufacturing in 2020."

Mike was the founder and CEO of MakerOS, an all-in-one business operating software for manufacturers, engineers, designers, and fabricators to facilitate modern product development. Shapeways acquired MakerOS in April 2022.
    `
  }
];

export const getPostSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};

export const getPostBySlug = (slug: string): Post => {
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  return post;
};

export const getAllPosts = (): Post[] => {
  // Sort posts by date (newest first)
  return [...blogPosts].sort((post1, post2) => 
    (new Date(post1.date) > new Date(post2.date) ? -1 : 1)
  );
};

export const getPostsByCategory = (category: string): Post[] => {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getAllCategories = (): string[] => {
  const categories = getAllPosts().map(post => post.category);
  return Array.from(new Set(categories));
};

export const getAllTags = (): string[] => {
  const tags = getAllPosts().flatMap(post => post.tags);
  return Array.from(new Set(tags));
};

export const getRecentPosts = (count: number = 5): Post[] => {
  return getAllPosts().slice(0, count);
};

export const serializeMdx = async (source: string) => {
  // In a real implementation, this would use next-mdx-remote/serialize
  // For this browser-compatible version, we'll return a simplified structure
  return {
    compiledSource: source,
    // Add any other properties that MDXRemote expects
  };
};
