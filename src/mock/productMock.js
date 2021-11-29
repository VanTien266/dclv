import moment from "moment";

import mock from "../utils/mock";

mock.onGet("product/fabric-roll").reply(200, {
  fabricRoll: [
    {
      id: "SP1111",
      billID: "",
      warehouseId: 1,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(5, "months")
        .subtract(3, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1112",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 900,
      lot: "L2",
    },
    {
      id: "SP1113",
      billID: 2,
      warehouseId: 3,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1000,
      lot: "L2",
    },
    {
      id: "SP1114",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1115",
      billID: "",
      warehouseId: 3,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(1, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1116",
      billID: 3,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(2, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1117",
      billID: 1,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L2",
    },
    {
      id: "SP1118",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(5, "days")
        .subtract(1, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1119",
      billID: 7,
      warehouseId: 2,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(10, "days")
        .subtract(2, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1120",
      billID: "",
      warehouseId: 1,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(5, "months")
        .subtract(3, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1121",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 900,
      lot: "L2",
    },
    {
      id: "SP1122",
      billID: 2,
      warehouseId: 3,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1000,
      lot: "L2",
    },
    {
      id: "SP1123",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1124",
      billID: "",
      warehouseId: 3,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(1, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1125",
      billID: 3,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(2, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1126",
      billID: 1,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L2",
    },
    {
      id: "SP1127",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(5, "days")
        .subtract(1, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1128",
      billID: 7,
      warehouseId: 2,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(10, "days")
        .subtract(2, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1129",
      billID: "",
      warehouseId: 1,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(5, "months")
        .subtract(3, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1130",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 900,
      lot: "L2",
    },
    {
      id: "SP1131",
      billID: 2,
      warehouseId: 3,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1000,
      lot: "L2",
    },
    {
      id: "SP1132",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1133",
      billID: "",
      warehouseId: 3,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(1, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1134",
      billID: 3,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(2, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1135",
      billID: 1,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L2",
    },
    {
      id: "SP1136",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(5, "days")
        .subtract(1, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1137",
      billID: 7,
      warehouseId: 2,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(10, "days")
        .subtract(2, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1138",
      billID: "",
      warehouseId: 1,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(5, "months")
        .subtract(3, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1139",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 900,
      lot: "L2",
    },
    {
      id: "SP1140",
      billID: 2,
      warehouseId: 3,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1000,
      lot: "L2",
    },
    {
      id: "SP1141",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(3, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1142",
      billID: "",
      warehouseId: 3,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(1, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1143",
      billID: 3,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(2, "days")
        .subtract(2, "months")
        .subtract(2, "years"),
      length: 1500,
      lot: "L3",
    },
    {
      id: "SP1144",
      billID: 1,
      warehouseId: 1,
      status: false,
      item: {
        colorCode: "CL112",
        fabricType: { id: 2, name: "kaki" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 500000,
          },
        ],
        name: "kaki trắng",
      },
      dateAdded: moment()
        .subtract(4, "days")
        .subtract(1, "months")
        .subtract(1, "years"),
      length: 1500,
      lot: "L2",
    },
    {
      id: "SP1145",
      billID: "",
      warehouseId: 2,
      status: true,
      item: {
        colorCode: "CL111",
        fabricType: { id: 1, name: "jean" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(1, "months")
              .subtract(4, "years"),
            price: 200000,
          },
        ],
        name: "jean trắng",
      },
      dateAdded: moment()
        .subtract(5, "days")
        .subtract(1, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L1",
    },
    {
      id: "SP1146",
      billID: 7,
      warehouseId: 2,
      status: false,
      item: {
        colorCode: "CL113",
        fabricType: { id: 3, name: "thun" },
        marketPrice: [
          {
            dateAplied: moment()
              .subtract(1, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 190000,
          },
          {
            dateAplied: moment()
              .subtract(10, "days")
              .subtract(2, "months")
              .subtract(4, "years"),
            price: 210000,
          },
        ],
        name: "thun xanh",
      },
      dateAdded: moment()
        .subtract(10, "days")
        .subtract(2, "months")
        .subtract(4, "years"),
      length: 1500,
      lot: "L3",
    },
  ],
});
