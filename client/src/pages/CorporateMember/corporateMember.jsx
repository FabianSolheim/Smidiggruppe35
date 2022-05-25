import React from "react";
import "./corporateMember.css";
import { CorporateBenefits } from "./corporateBenefits";
import { CorporateServices } from "./corporateServices";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";

export function CorporateMember() {
  return (
    <div>
      {HeaderBox(
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3862",
        <h1>
          Corporate <em>members</em>
        </h1>,
        "white",
        <p>
          Joining Meloria Impact gives you access to a{" "}
          <strong>
            <em>broad variety</em>
          </strong>
          <br /> of{" "}
          <strong>
            <em>helpful tools</em>
          </strong>{" "}
          for tracking, statistics & more
        </p>,
        "white"
      )}
      <div style={{ height: 100 }} />
      <CorporateBenefits />
      <div style={{ height: 100 }} />
      <CorporateServices />
      <div style={{ height: 100 }} />
    </div>
  );
}
