"use client";
import { IntercomProvider } from "@/utils/IntercomProvider";
import ExpertCard from "@/components/ExpertCard";
import FormPage from "@/components/FormPage";
import Form from "@/components/get-a-quote/Form";
import { bookFreeData } from "@/const/book-free";
import { useState, useEffect } from "react";

export default function BookFree() {

  const {description, items} = bookFreeData;

  const Description = () => {
    return (
      <IntercomProvider>
        {description}
        {items.map((item, key) => 
          <ExpertCard 
            key={key}
            img={item.img}
            name={item.name}
            position={item.position}
            text={item.text}
            certificates={item.certificates}
            linkedIn={item.linkedIn}
          />
        )}
      </IntercomProvider>
    )
  }

  return (
    <FormPage
      title={"Book a Free Consultation"}
      description={
        <Description />
      }
      form={<Form />}
    />
  );
}
