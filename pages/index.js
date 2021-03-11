import React from "react";
import style from "./index.module.css";

import Head from "next/head";

import data from "./api/data.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tray.io GrowthEng Take Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.container}>
        <img src="/logo.svg" className={style.logo} />
        <h1 className={style.title}>
          Welcome to the Tray.io Growth Engineering frontend code test!
        </h1>

        <p className={style.description}>
          Hey! Thanks for taking the time to apply to our team! We've built this
          code test for you to help us learn a little more about you and the way
          you work so we can talk a bit about it once you come to the interview.
        </p>

        <h2 className={style.subtitle}>Why is the test designed like this?</h2>

        <h3>It's realistic</h3>
        <p>
          We want the test to reflect work similar to what you will be doing
          day-to-day. So we've taken this page as an example as it's similar to
          our most important page type for SEO on our platform.
        </p>
        <p>
          It uses a simple Next.js project to get started, as this is what we
          use here on the Growth Team at Tray.io to render our pages.
        </p>

        <h3>It sets you up for success</h3>
        <p>
          We know what a job hunt is like and want to the maximise meaningful
          work you can do in the take-home assignment for the time you spend on
          it. That's why we've set up a project that you can start from and hit
          the ground running.
        </p>
        <p>
          We want you to spend roughly up to 1.5 hours to complete the main
          requirements in this test.
        </p>
        <p>
          We've tried to make this test as open-ended as possible so that you
          can solve the scenario in multiple ways, in whatever way you think is
          best. We've (hopefully) provided you with all the data and assets you
          might possibly need. But if we haven't or you'd like some
          clarification about this task then please let us know, we're more then
          happy to help!
        </p>

        <h2 className={style.subtitle}>Current pages:</h2>
        <ol>
          {data.connectors.map((connector) => (
            <li key={`pages-${connector.slug}`}>
              {connector.name} -{" "}
              <a href={`/connectors/${connector.slug}`}>
                /connectors/{connector.slug}
              </a>
            </li>
          ))}
        </ol>

        <h2 className={style.subtitle}>Terminology</h2>
        <p>
          <strong>Connectors - </strong>A connector is the name of a service
          (e.g Salesforce or Slack) within the Tray.io application which has a
          pre-built API endpoint and accompanying functions. Using Tray.io's
          intuitive drag-and-drop interface, you can build complex automations
          with these connectors to access, edit, and manipulate the data
          available from them.{" "}
          <a href="https://tray.io/documentation/platform/getting-started/overview/#connectors">
            Learn more about connectors here.
          </a>
        </p>
        <p>
          <strong>Trigger - </strong>A trigger is what causes an automation
          (known as a Workflow here at Tray.io) to run. A Workflow can be
          triggered in a variety of ways, e.g manually using a "Manual Trigger"
          by clicking on the "Run workflow" button, the current time and date
          using the "Scheduled Trigger", as well as by a vast number of services
          known as "Service Triggers".{" "}
          <a href="https://tray.io/documentation/platform/getting-started/overview/#triggers">
            Learn more about triggers here.
          </a>
        </p>

        <h2 className={style.subtitle}>What do you need to do?</h2>
        <ol className={style.taskList}>
          <li>
            Get started by editing{" "}
            <code className={style.code}>pages/connectors/[...slug].js</code>
          </li>
          <li>
            We'd like you to add a new component which helps users better
            understand how Tray.io connectors work (see the image below). This
            new component should display three steps with the relevant icon and
            title for each. In between each of these steps, there should be a
            bar/line to further illustrate how each step is linked. The first
            step should be a "Manual Trigger" and have the manual trigger icon
            which can be found in the "public" folder as{" "}
            <code className={style.code}>manualTriggerIcon.svg</code>. The
            second step should display the logo and name of the connector page
            the user is currently on. In the third and final step, the text "Any
            API or service" needs to be placed where the icon/logo would
            normally be.
          </li>
          <li>
            Then we want you to add a new dynamic page to represent and handle
            connections between two connectors, e.g{" "}
            <code className={style.code}>
              localhost:3000/connectors/slack-salesforce
            </code>
            . This new dynamic page needs to be able to handle displaying all
            the different possible URLs of the 10 connectors in the{" "}
            <code className={style.code}>data.json</code> file in the "api"
            folder when paired together with each other.
            <br></br>
            <a href="https://tray.io/connectors/salesforce-slack-integrations" target="_BLANK">
            Have a look at our real world example here
          </a>
          </li>
          <li>
            After you have created the new page, you should update the existing
            components to handle describing and displaying connections between
            two connectors, including the new component you created earlier.
          </li>
          <li>
            The final thing we'd like you to add is an animation in the bar
            between connectors in the new component you added to illustrate the
            data that is passing between the two connectors. Add any animation
            here you think works best and clearly shows how data moves around in
            a Tray.io automation.
          </li>
        </ol>

        <img
          src="https://images.ctfassets.net/7rbn0raz0t75/5RYQ6MQXULQQJJGXdUUQEK/7c608b69a1cc8365e5a70186876ded45/engTest_newComponent.png"
          className={style.image}
        />

        <h2 className={style.subtitle}>Bonus tasks</h2>
        <p>
          Finished the task and got some extra downtime? You can do and change
          whatever you want if you think of a better way of doing something!
        </p>
        <p>
          We've split out these ideas into opportunities to display technical
          writing ability or further examples of coding. If we could convince
          you to choose one it would be to do a technical writing piece as it's
          useful for us to see how you communicate and we've already covered
          some coding in the main requirements.
        </p>
        <p>Here's some ideas:</p>
        <h3>Technical writing:</h3>
        <ul>
           <li>
            Right now all the content is contained within this project repo. How would you make it easy for non-technical editors to make content changes and what steps would that involve?
          </li>
          <li>
            Is there any code we've provided that you look at and think could be improved? Tell us what you'd do to improve the quality of the
            project!
          </li>
          <li>
            Tests? What would your testing strategy be for this website? How do
            you ensure the quality of your project?
          </li>
          <li>
            What is a feature you would like to add to the project? Show us how
            you'd present a feature idea and implementation plan.
          </li>
        </ul>
        <h3>Coding:</h3>
        <ul>
          <li>Do you think a section is ugly? Re-style it!</li>
          <li>Add some automated testing for the project</li>
          <li>Have a new feature idea? Implement it!</li>
        </ul>
      </div>
    </div>
  );
}
