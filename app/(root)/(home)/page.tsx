import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const question = [
  {
    _id: "q1",
    title: "How to use TypeScript with React?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "React" },
    ],
    author: {
      _id: "author1",
      name: "Alice",
      picture: "alice-profile.jpg",
    },
    upvotes: 20,
    views: 100,
    answers: [
      {
        /* Structure of answer object not defined in the interface */
      },
      // ...
    ],
    createdAt: new Date("2023-01-01"),
  },

  {
    _id: "q2",
    title: "Best practices for responsive web design?",
    tags: [
      { _id: "tag3", name: "Web Design" },
      { _id: "tag4", name: "Responsive Design" },
    ],
    author: {
      _id: "author2",
      name: "Bob",
      picture: "bob-profile.jpg",
    },
    upvotes: 15,
    views: 80,
    answers: [
      {
        /* Structure of answer object not defined in the interface */
      },
      // ...
    ],
    createdAt: new Date("2022-02-15"),
  },
];

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-cnter">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {question.length > 0 ? (
          question.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description="BE the first to break the silence! Ask a Question and Kickstart the
        discussion. Your query can be the next big thing others learn from. GET
        involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default page;
