import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import { Resizer, KernelSize } from "postprocessing";
// import Fireflies from "./components/Fireflies";
import Model from "./models/Model";

function CanvasJS() {
  let url = useParams().id;

  // const [data, setData] = useState([
  //   {
  //     trait_type: "Base",
  //     value: "Base Four",
  //   },
  //   {
  //     trait_type: "Acc Base",
  //     value: "Pole Six",
  //   },
  //   {
  //     trait_type: "First Floor",
  //     value: "Type One",
  //   },
  //   {
  //     trait_type: "Acc First Floor Front Left",
  //     value: "Bike",
  //   },
  //   {
  //     trait_type: "Acc First Floor Front Right",
  //     value: "Crate",
  //   },
  //   {
  //     trait_type: "Acc First Floor Right Lower Back",
  //     value: "Bike",
  //   },
  //   {
  //     trait_type: "Acc First Floor Right Lower Front",
  //     value: "Wooden Box",
  //   },
  //   {
  //     trait_type: "Acc First Floor Right Upper Back",
  //     value: "Condenser Unit Type D",
  //   },
  //   {
  //     trait_type: "Acc First Floor Right Upper Front",
  //     value: "Pipe",
  //   },
  //   {
  //     trait_type: "Second Floor",
  //     value: "Type Five",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Back Left",
  //     value: "Wall Vent",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Back Right",
  //     value: "Wall Vent",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Left Back",
  //     value: "Condenser Unit Type D",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Left Front",
  //     value: "Condenser Unit Type D",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Right Back",
  //     value: "Wall Vent",
  //   },
  //   {
  //     trait_type: "Acc Second Floor Right Front",
  //     value: "Condenser Unit Type C",
  //   },
  //   {
  //     trait_type: "Front",
  //     value: "Store Two",
  //   },
  //   {
  //     trait_type: "Back",
  //     value: "Backdoor Five",
  //   },
  //   {
  //     trait_type: "Main Sign",
  //     value: "Game Shop",
  //   },
  //   {
  //     trait_type: "Small Sign",
  //     value: "Luqnio Sign",
  //   },
  // ]);

  // const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       setData(myJson[url - 1].attributes);
  //       console.log(myJson[url - 1].attributes);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // console.log(data);

  const data = [
    {
      name: "Sora Tycoon #1",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/1",
      animation_url: "https://building-eight.vercel.app/1",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Tree One",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Luqnio",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #2",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/2",
      animation_url: "https://building-eight.vercel.app/2",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #3",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/3",
      animation_url: "https://building-eight.vercel.app/3",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #4",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/4",
      animation_url: "https://building-eight.vercel.app/4",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #5",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/5",
      animation_url: "https://building-eight.vercel.app/5",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Izakaya",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #6",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/6",
      animation_url: "https://building-eight.vercel.app/6",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Dailymart",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #7",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/7",
      animation_url: "https://building-eight.vercel.app/7",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #8",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/8",
      animation_url: "https://building-eight.vercel.app/8",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Toys Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Bank Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #9",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/9",
      animation_url: "https://building-eight.vercel.app/9",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #10",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/10",
      animation_url: "https://building-eight.vercel.app/10",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Tree Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #11",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/11",
      animation_url: "https://building-eight.vercel.app/11",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Laundry",
        },
        {
          trait_type: "Small Sign",
          value: "Jav Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #12",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/12",
      animation_url: "https://building-eight.vercel.app/12",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Sfc",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #13",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/13",
      animation_url: "https://building-eight.vercel.app/13",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #14",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/14",
      animation_url: "https://building-eight.vercel.app/14",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Sfc Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #15",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/15",
      animation_url: "https://building-eight.vercel.app/15",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #16",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/16",
      animation_url: "https://building-eight.vercel.app/16",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #17",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/17",
      animation_url: "https://building-eight.vercel.app/17",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bike Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Zero Four Mart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #18",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/18",
      animation_url: "https://building-eight.vercel.app/18",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #19",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/19",
      animation_url: "https://building-eight.vercel.app/19",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #20",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/20",
      animation_url: "https://building-eight.vercel.app/20",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Lift",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #21",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/21",
      animation_url: "https://building-eight.vercel.app/21",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "See",
        },
        {
          trait_type: "Small Sign",
          value: "Sfc Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #22",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/22",
      animation_url: "https://building-eight.vercel.app/22",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #23",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/23",
      animation_url: "https://building-eight.vercel.app/23",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #24",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/24",
      animation_url: "https://building-eight.vercel.app/24",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Lift",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #25",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/25",
      animation_url: "https://building-eight.vercel.app/25",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #26",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/26",
      animation_url: "https://building-eight.vercel.app/26",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #27",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/27",
      animation_url: "https://building-eight.vercel.app/27",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Big Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Tora Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #28",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/28",
      animation_url: "https://building-eight.vercel.app/28",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Comic Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #29",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/29",
      animation_url: "https://building-eight.vercel.app/29",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #30",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/30",
      animation_url: "https://building-eight.vercel.app/30",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Big Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Sfc",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #31",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/31",
      animation_url: "https://building-eight.vercel.app/31",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #32",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/32",
      animation_url: "https://building-eight.vercel.app/32",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #33",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/33",
      animation_url: "https://building-eight.vercel.app/33",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #34",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/34",
      animation_url: "https://building-eight.vercel.app/34",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp One",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #35",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/35",
      animation_url: "https://building-eight.vercel.app/35",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #36",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/36",
      animation_url: "https://building-eight.vercel.app/36",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #37",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/37",
      animation_url: "https://building-eight.vercel.app/37",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Game Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #38",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/38",
      animation_url: "https://building-eight.vercel.app/38",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #39",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/39",
      animation_url: "https://building-eight.vercel.app/39",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Ian Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #40",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/40",
      animation_url: "https://building-eight.vercel.app/40",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Sign Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #41",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/41",
      animation_url: "https://building-eight.vercel.app/41",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Tree Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bike Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Bank Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #42",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/42",
      animation_url: "https://building-eight.vercel.app/42",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Udon",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #43",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/43",
      animation_url: "https://building-eight.vercel.app/43",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Game Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #44",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/44",
      animation_url: "https://building-eight.vercel.app/44",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #45",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/45",
      animation_url: "https://building-eight.vercel.app/45",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Game Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Zero Four Mart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #46",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/46",
      animation_url: "https://building-eight.vercel.app/46",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Game Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #47",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/47",
      animation_url: "https://building-eight.vercel.app/47",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #48",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/48",
      animation_url: "https://building-eight.vercel.app/48",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Game Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #49",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/49",
      animation_url: "https://building-eight.vercel.app/49",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Toys Shop",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #50",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/50",
      animation_url: "https://building-eight.vercel.app/50",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Lift",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #51",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/51",
      animation_url: "https://building-eight.vercel.app/51",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Tree One",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #52",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/52",
      animation_url: "https://building-eight.vercel.app/52",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bike Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #53",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/53",
      animation_url: "https://building-eight.vercel.app/53",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Bank Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #54",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/54",
      animation_url: "https://building-eight.vercel.app/54",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Cat Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #55",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/55",
      animation_url: "https://building-eight.vercel.app/55",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp One",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Raceworld Workshop",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #56",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/56",
      animation_url: "https://building-eight.vercel.app/56",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #57",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/57",
      animation_url: "https://building-eight.vercel.app/57",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #58",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/58",
      animation_url: "https://building-eight.vercel.app/58",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #59",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/59",
      animation_url: "https://building-eight.vercel.app/59",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Weasleys",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #60",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/60",
      animation_url: "https://building-eight.vercel.app/60",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #61",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/61",
      animation_url: "https://building-eight.vercel.app/61",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Coffee Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #62",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/62",
      animation_url: "https://building-eight.vercel.app/62",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #63",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/63",
      animation_url: "https://building-eight.vercel.app/63",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Ian Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #64",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/64",
      animation_url: "https://building-eight.vercel.app/64",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #65",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/65",
      animation_url: "https://building-eight.vercel.app/65",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #66",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/66",
      animation_url: "https://building-eight.vercel.app/66",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Tora Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #67",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/67",
      animation_url: "https://building-eight.vercel.app/67",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Niko",
        },
        {
          trait_type: "Small Sign",
          value: "Cat Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #68",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/68",
      animation_url: "https://building-eight.vercel.app/68",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #69",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/69",
      animation_url: "https://building-eight.vercel.app/69",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #70",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/70",
      animation_url: "https://building-eight.vercel.app/70",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Dvd Tsubomi",
        },
        {
          trait_type: "Small Sign",
          value: "Dailymart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #71",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/71",
      animation_url: "https://building-eight.vercel.app/71",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Sfc",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Ian Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #72",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/72",
      animation_url: "https://building-eight.vercel.app/72",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #73",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/73",
      animation_url: "https://building-eight.vercel.app/73",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #74",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/74",
      animation_url: "https://building-eight.vercel.app/74",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Laundry",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #75",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/75",
      animation_url: "https://building-eight.vercel.app/75",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #76",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/76",
      animation_url: "https://building-eight.vercel.app/76",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Jav Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #77",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/77",
      animation_url: "https://building-eight.vercel.app/77",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Five",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Niko",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #78",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/78",
      animation_url: "https://building-eight.vercel.app/78",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Weasleys",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #79",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/79",
      animation_url: "https://building-eight.vercel.app/79",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #80",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/80",
      animation_url: "https://building-eight.vercel.app/80",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #81",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/81",
      animation_url: "https://building-eight.vercel.app/81",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Tree Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #82",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/82",
      animation_url: "https://building-eight.vercel.app/82",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Big Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Sushi Bar",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #83",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/83",
      animation_url: "https://building-eight.vercel.app/83",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Adult Store",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #84",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/84",
      animation_url: "https://building-eight.vercel.app/84",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #85",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/85",
      animation_url: "https://building-eight.vercel.app/85",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Adult Store",
        },
        {
          trait_type: "Small Sign",
          value: "Raceworld Workshop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #86",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/86",
      animation_url: "https://building-eight.vercel.app/86",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Lift",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #87",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/87",
      animation_url: "https://building-eight.vercel.app/87",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Bj Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #88",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/88",
      animation_url: "https://building-eight.vercel.app/88",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #89",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/89",
      animation_url: "https://building-eight.vercel.app/89",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Raceworld Workshop",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #90",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/90",
      animation_url: "https://building-eight.vercel.app/90",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Niko",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #91",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/91",
      animation_url: "https://building-eight.vercel.app/91",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Raceworld Workshop",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #92",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/92",
      animation_url: "https://building-eight.vercel.app/92",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #93",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/93",
      animation_url: "https://building-eight.vercel.app/93",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #94",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/94",
      animation_url: "https://building-eight.vercel.app/94",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Udon",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #95",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/95",
      animation_url: "https://building-eight.vercel.app/95",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Adult Store",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #96",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/96",
      animation_url: "https://building-eight.vercel.app/96",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #97",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/97",
      animation_url: "https://building-eight.vercel.app/97",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Laundry",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #98",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/98",
      animation_url: "https://building-eight.vercel.app/98",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Sfc Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #99",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/99",
      animation_url: "https://building-eight.vercel.app/99",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Mecha Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #100",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/100",
      animation_url: "https://building-eight.vercel.app/100",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Bj Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #101",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/101",
      animation_url: "https://building-eight.vercel.app/101",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Cat Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #102",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/102",
      animation_url: "https://building-eight.vercel.app/102",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Yosh Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #103",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/103",
      animation_url: "https://building-eight.vercel.app/103",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #104",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/104",
      animation_url: "https://building-eight.vercel.app/104",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Laundry",
        },
        {
          trait_type: "Small Sign",
          value: "Fwifilm Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #105",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/105",
      animation_url: "https://building-eight.vercel.app/105",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Dailymart",
        },
        {
          trait_type: "Small Sign",
          value: "Dailymart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #106",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/106",
      animation_url: "https://building-eight.vercel.app/106",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #107",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/107",
      animation_url: "https://building-eight.vercel.app/107",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Maid Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #108",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/108",
      animation_url: "https://building-eight.vercel.app/108",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Ian Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #109",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/109",
      animation_url: "https://building-eight.vercel.app/109",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Luqnio Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #110",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/110",
      animation_url: "https://building-eight.vercel.app/110",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Bj Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #111",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/111",
      animation_url: "https://building-eight.vercel.app/111",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Izakaya",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #112",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/112",
      animation_url: "https://building-eight.vercel.app/112",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Five",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen",
        },
        {
          trait_type: "Small Sign",
          value: "Comic Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #113",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/113",
      animation_url: "https://building-eight.vercel.app/113",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #114",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/114",
      animation_url: "https://building-eight.vercel.app/114",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Izakaya",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #115",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/115",
      animation_url: "https://building-eight.vercel.app/115",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #116",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/116",
      animation_url: "https://building-eight.vercel.app/116",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #117",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/117",
      animation_url: "https://building-eight.vercel.app/117",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #118",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/118",
      animation_url: "https://building-eight.vercel.app/118",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen",
        },
        {
          trait_type: "Small Sign",
          value: "Fwifilm Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #119",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/119",
      animation_url: "https://building-eight.vercel.app/119",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Maid Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #120",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/120",
      animation_url: "https://building-eight.vercel.app/120",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #121",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/121",
      animation_url: "https://building-eight.vercel.app/121",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #122",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/122",
      animation_url: "https://building-eight.vercel.app/122",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #123",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/123",
      animation_url: "https://building-eight.vercel.app/123",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp One",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Niko",
        },
        {
          trait_type: "Small Sign",
          value: "Dvd Tsubomi Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #124",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/124",
      animation_url: "https://building-eight.vercel.app/124",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Game Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #125",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/125",
      animation_url: "https://building-eight.vercel.app/125",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #126",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/126",
      animation_url: "https://building-eight.vercel.app/126",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #127",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/127",
      animation_url: "https://building-eight.vercel.app/127",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #128",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/128",
      animation_url: "https://building-eight.vercel.app/128",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Law Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #129",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/129",
      animation_url: "https://building-eight.vercel.app/129",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Laundry",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #130",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/130",
      animation_url: "https://building-eight.vercel.app/130",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #131",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/131",
      animation_url: "https://building-eight.vercel.app/131",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Bike Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #132",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/132",
      animation_url: "https://building-eight.vercel.app/132",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #133",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/133",
      animation_url: "https://building-eight.vercel.app/133",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Sushi Bar",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #134",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/134",
      animation_url: "https://building-eight.vercel.app/134",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Big Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Dailymart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #135",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/135",
      animation_url: "https://building-eight.vercel.app/135",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Coffee Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #136",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/136",
      animation_url: "https://building-eight.vercel.app/136",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Mecha Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #137",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/137",
      animation_url: "https://building-eight.vercel.app/137",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Tree One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #138",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/138",
      animation_url: "https://building-eight.vercel.app/138",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Weasleys",
        },
        {
          trait_type: "Small Sign",
          value: "Bike Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #139",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/139",
      animation_url: "https://building-eight.vercel.app/139",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Dead Tree",
        },
        {
          trait_type: "First Floor",
          value: "Type Four",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #140",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/140",
      animation_url: "https://building-eight.vercel.app/140",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Raceworld Workshop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #141",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/141",
      animation_url: "https://building-eight.vercel.app/141",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #142",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/142",
      animation_url: "https://building-eight.vercel.app/142",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Sushi Bar",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #143",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/143",
      animation_url: "https://building-eight.vercel.app/143",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Adult Store",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Ian Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #144",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/144",
      animation_url: "https://building-eight.vercel.app/144",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #145",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/145",
      animation_url: "https://building-eight.vercel.app/145",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #146",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/146",
      animation_url: "https://building-eight.vercel.app/146",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Mecha Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #147",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/147",
      animation_url: "https://building-eight.vercel.app/147",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Fwifilm",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #148",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/148",
      animation_url: "https://building-eight.vercel.app/148",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Mecha Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #149",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/149",
      animation_url: "https://building-eight.vercel.app/149",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Taxi Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Toys Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #150",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/150",
      animation_url: "https://building-eight.vercel.app/150",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Five",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Udon",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #151",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/151",
      animation_url: "https://building-eight.vercel.app/151",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Traffic Light One",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Comic Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #152",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/152",
      animation_url: "https://building-eight.vercel.app/152",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Sfc Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #153",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/153",
      animation_url: "https://building-eight.vercel.app/153",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Paystation",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #154",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/154",
      animation_url: "https://building-eight.vercel.app/154",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Retro Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #155",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/155",
      animation_url: "https://building-eight.vercel.app/155",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Zero Four Mart",
        },
        {
          trait_type: "Small Sign",
          value: "Zero Four Mart Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #156",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/156",
      animation_url: "https://building-eight.vercel.app/156",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #157",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/157",
      animation_url: "https://building-eight.vercel.app/157",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #158",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/158",
      animation_url: "https://building-eight.vercel.app/158",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Weasleys",
        },
        {
          trait_type: "Small Sign",
          value: "Mecha Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #159",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/159",
      animation_url: "https://building-eight.vercel.app/159",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Yosh Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #160",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/160",
      animation_url: "https://building-eight.vercel.app/160",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Niko",
        },
        {
          trait_type: "Small Sign",
          value: "Weasleys Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #161",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/161",
      animation_url: "https://building-eight.vercel.app/161",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Raceworld Workshop",
        },
        {
          trait_type: "Small Sign",
          value: "Sushi Bar Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #162",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/162",
      animation_url: "https://building-eight.vercel.app/162",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #163",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/163",
      animation_url: "https://building-eight.vercel.app/163",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Paystation Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #164",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/164",
      animation_url: "https://building-eight.vercel.app/164",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Maid Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #165",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/165",
      animation_url: "https://building-eight.vercel.app/165",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Dailymart",
        },
        {
          trait_type: "Small Sign",
          value: "Maid Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #166",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/166",
      animation_url: "https://building-eight.vercel.app/166",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Toys Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Niko Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #167",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/167",
      animation_url: "https://building-eight.vercel.app/167",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #168",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/168",
      animation_url: "https://building-eight.vercel.app/168",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Cat Cafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #169",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/169",
      animation_url: "https://building-eight.vercel.app/169",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Ooo",
        },
        {
          trait_type: "Small Sign",
          value: "Artist Agency Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #170",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/170",
      animation_url: "https://building-eight.vercel.app/170",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Square Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #171",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/171",
      animation_url: "https://building-eight.vercel.app/171",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Cones",
        },
        {
          trait_type: "First Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Ramen Ian",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #172",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/172",
      animation_url: "https://building-eight.vercel.app/172",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #173",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/173",
      animation_url: "https://building-eight.vercel.app/173",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Bank",
        },
        {
          trait_type: "Small Sign",
          value: "Raceworld Workshop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #174",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/174",
      animation_url: "https://building-eight.vercel.app/174",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Retro One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Luqnio",
        },
        {
          trait_type: "Small Sign",
          value: "Sfc Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #175",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/175",
      animation_url: "https://building-eight.vercel.app/175",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Sfc",
        },
        {
          trait_type: "Small Sign",
          value: "Jav Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #176",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/176",
      animation_url: "https://building-eight.vercel.app/176",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Raceworld Workshop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #177",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/177",
      animation_url: "https://building-eight.vercel.app/177",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Seven",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #178",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/178",
      animation_url: "https://building-eight.vercel.app/178",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Small Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #179",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/179",
      animation_url: "https://building-eight.vercel.app/179",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "No Parking Sign",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #180",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/180",
      animation_url: "https://building-eight.vercel.app/180",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Pole One",
        },
        {
          trait_type: "First Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Weasleys",
        },
        {
          trait_type: "Small Sign",
          value: "Izakaya Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #181",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/181",
      animation_url: "https://building-eight.vercel.app/181",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eight",
        },
        {
          trait_type: "First Floor",
          value: "Type Seven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Yosh",
        },
        {
          trait_type: "Small Sign",
          value: "Bank Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #182",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/182",
      animation_url: "https://building-eight.vercel.app/182",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Six",
        },
        {
          trait_type: "First Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #183",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/183",
      animation_url: "https://building-eight.vercel.app/183",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Nine",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Raceworld Workshop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #184",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/184",
      animation_url: "https://building-eight.vercel.app/184",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Six",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Law",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Tora Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #185",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/185",
      animation_url: "https://building-eight.vercel.app/185",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Five",
        },
        {
          trait_type: "Main Sign",
          value: "Bike Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Comic Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #186",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/186",
      animation_url: "https://building-eight.vercel.app/186",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Ten",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Three",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Cat Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Adult Store Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #187",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/187",
      animation_url: "https://building-eight.vercel.app/187",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Fourteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Poster",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Luqnio",
        },
        {
          trait_type: "Small Sign",
          value: "Ramen Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #188",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/188",
      animation_url: "https://building-eight.vercel.app/188",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp One",
        },
        {
          trait_type: "First Floor",
          value: "Type Eleven",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Bonsai",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Two",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "Store One",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Artist Agency",
        },
        {
          trait_type: "Small Sign",
          value: "Ooo Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #189",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/189",
      animation_url: "https://building-eight.vercel.app/189",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Nine",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Dvd Tsubomi",
        },
        {
          trait_type: "Small Sign",
          value: "Yosh Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #190",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/190",
      animation_url: "https://building-eight.vercel.app/190",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Seventeen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #191",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/191",
      animation_url: "https://building-eight.vercel.app/191",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Four",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Two",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Kitchen Vent",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Luqnio",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #192",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/192",
      animation_url: "https://building-eight.vercel.app/192",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Five",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Electric Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Bar Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Jav Store",
        },
        {
          trait_type: "Small Sign",
          value: "Coffee Shop Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #193",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/193",
      animation_url: "https://building-eight.vercel.app/193",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Eight",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Big Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Pipe",
        },
        {
          trait_type: "Second Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Front",
          value: "Arcade",
        },
        {
          trait_type: "Back",
          value: "Backdoor One",
        },
        {
          trait_type: "Main Sign",
          value: "Stationery Tora",
        },
        {
          trait_type: "Small Sign",
          value: "Udon Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #194",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/194",
      animation_url: "https://building-eight.vercel.app/194",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Tree One",
        },
        {
          trait_type: "First Floor",
          value: "Type Five",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "Retro Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Three",
        },
        {
          trait_type: "Main Sign",
          value: "Net Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #195",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/195",
      animation_url: "https://building-eight.vercel.app/195",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Wooden Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Sixteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Blue Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Udon",
        },
        {
          trait_type: "Small Sign",
          value: "See Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #196",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/196",
      animation_url: "https://building-eight.vercel.app/196",
      attributes: [
        {
          trait_type: "Base",
          value: "Base One",
        },
        {
          trait_type: "Acc Base",
          value: "Lamp Three",
        },
        {
          trait_type: "First Floor",
          value: "Type Eighteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Condenser Unit",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Small Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Store Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Travel Agency Japan",
        },
        {
          trait_type: "Small Sign",
          value: "Laundry Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #197",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/197",
      animation_url: "https://building-eight.vercel.app/197",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Six",
        },
        {
          trait_type: "Acc Base",
          value: "Big Fence",
        },
        {
          trait_type: "First Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Mailbox",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Green Trash Bin",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Wooden Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Light Box",
        },
        {
          trait_type: "Second Floor",
          value: "Type Twelve",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Classic One",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Game Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Stationery Tora Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #198",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/198",
      animation_url: "https://building-eight.vercel.app/198",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Four",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Cafe Sign Board",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bottles",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Compound Electric Box",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Lantern",
        },
        {
          trait_type: "Second Floor",
          value: "Type Ten",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type A",
        },
        {
          trait_type: "Front",
          value: "White Three",
        },
        {
          trait_type: "Back",
          value: "Backdoor Two",
        },
        {
          trait_type: "Main Sign",
          value: "Bj",
        },
        {
          trait_type: "Small Sign",
          value: "Yosh Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #199",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/199",
      animation_url: "https://building-eight.vercel.app/199",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Three",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Twelve",
        },
        {
          trait_type: "First Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Gachapon Machine",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Bike",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Thirteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Front",
          value: "Rolling Door Three",
        },
        {
          trait_type: "Back",
          value: "Trash Bin One",
        },
        {
          trait_type: "Main Sign",
          value: "Maid Cafe",
        },
        {
          trait_type: "Small Sign",
          value: "Netcafe Sign",
        },
      ],
    },
    {
      name: "Sora Tycoon #200",
      description: "..............",
      image: "https://soratycoon-dev.vercel.app/api/building/image/200",
      animation_url: "https://building-eight.vercel.app/200",
      attributes: [
        {
          trait_type: "Base",
          value: "Base Two",
        },
        {
          trait_type: "Acc Base",
          value: "Pole Eleven",
        },
        {
          trait_type: "First Floor",
          value: "Type One",
        },
        {
          trait_type: "Acc First Floor Front Left",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Front Right",
          value: "Crate",
        },
        {
          trait_type: "Acc First Floor Right Lower Back",
          value: "Trash Bin With Cat",
        },
        {
          trait_type: "Acc First Floor Right Lower Front",
          value: "Vending Machine",
        },
        {
          trait_type: "Acc First Floor Right Upper Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc First Floor Right Upper Front",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Second Floor",
          value: "Type Fiveteen",
        },
        {
          trait_type: "Acc Second Floor Back Left",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Back Right",
          value: "Condenser Unit Type B",
        },
        {
          trait_type: "Acc Second Floor Left Back",
          value: "Condenser Unit Type D",
        },
        {
          trait_type: "Acc Second Floor Left Front",
          value: "Condenser Unit Type C",
        },
        {
          trait_type: "Acc Second Floor Right Back",
          value: "Wall Vent",
        },
        {
          trait_type: "Acc Second Floor Right Front",
          value: "Wall Vent",
        },
        {
          trait_type: "Front",
          value: "White Two",
        },
        {
          trait_type: "Back",
          value: "Backdoor Four",
        },
        {
          trait_type: "Main Sign",
          value: "Coffee Shop",
        },
        {
          trait_type: "Small Sign",
          value: "Jtt Travel Agency Sign",
        },
      ],
    },
  ];
  console.log(data[url - 1]);

  return (
    <React.Fragment>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        camera={{
          position: [-15, 10, 15],
        }}
        frameloop="demand"
      >
        <color attach="background" args={["#070a0d"]} />
        <hemisphereLight intensity={0.1} />
        <spotLight
          position={[15.903, 35.59, 16.093]}
          intensity={0.3}
          color={"#ffffff"}
          distance={61.68}
          angle={0.574}
          penumbra={0.5}
          decay={0}
          castShadow
          shadowBias={-0.00013}
        />
        <Suspense fallback={null}>
          <group position={[0, -6, 0]}>
            <EffectComposer multisampling={0}>
              <group position={[0, 0, 0]}>
                <mesh
                  rotation-x={-Math.PI / 2}
                  position={[0, 0.01, 0]}
                  scale={[50, 50, 1000]}
                  receiveShadow
                  renderOrder={200}
                >
                  <planeBufferGeometry attach="geometry" />
                  <shadowMaterial
                    attach="material"
                    transparent
                    color="#000"
                    opacity={0.5}
                  />
                </mesh>
              </group>
              <SMAA />
              {/* <group position={[0, 5, 0]}>
                <Fireflies count={65} />
              </group> */}
              <Environment preset="night" />
              <Bloom
                intensity={1}
                width={Resizer.AUTO_SIZE}
                height={Resizer.AUTO_SIZE}
                kernelSize={KernelSize.LARGE}
                luminanceThreshold={0.6}
                luminanceSmoothing={0.2}
              />
              <Model data={data[url - 1].attributes} />
            </EffectComposer>
          </group>
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
        <PerspectiveCamera />
      </Canvas>
    </React.Fragment>
  );
}

export default CanvasJS;
