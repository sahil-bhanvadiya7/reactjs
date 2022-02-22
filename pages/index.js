import { Fragment } from "react";
import Head from 'next/head'
import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";
function index(props) {
  return(
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of react meetups" />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  )  ;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://test1:test1@cluster0.tbla6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default index;
