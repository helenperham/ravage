import react from 'react'
import './global.css'
import NavBar from './navbar'
// import {layout} from './layout.jsx'
// import {footer} from './footer.jsx' - haven't added this file yet, but will add in 
// purpose of footer is to hold the subscription to mailchimp link

function Homepage({data, layout, footer}) {
  console.log(data)
  return (
    <div>
        <h1>
          <p>RAVAGE. It's a farce. An inside-the-head assessment of reality goes up against call scripts. </p>
        </h1>
        <h4>HD/SD/digital 35mm, color. 25', 20' </h4>
        <div class="videoWrapper">
        <iframe width="800" height="570" frameborder="0" src="https://player.vimeo.com/video/545734234?h=f6b45ef67a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="gouche_intro"></iframe>
        </div>
        {/* <p> <Footer /> </p> */}
        <p>
        </p>
        {/* {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link 
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
              
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))} */}
      </div>
  )
}

export default Homepage
