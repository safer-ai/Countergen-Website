import React, { useState } from "react";
import "../CountergenApp.css";
import ColabLink from "../components/ColabLink";
import DataAugmentation from "./countergenweb_sections/DataAugmentation";
import DataSelection from "./countergenweb_sections/DataSelection";
import ModelEvaluation from "./countergenweb_sections/ModelEvaluation";
import { AugmentedDataset, Dataset } from "../types";
import { Container } from "@mui/material";

const CountergenWeb = () => {
  const [dataset, setDataset] = useState<Dataset>({ samples: [] });
  const [augdataset, setAugDataset] = useState<AugmentedDataset | null>(null);

  return (
    <Container maxWidth="md">
      <h1 className="title">The Countergen Web Tool</h1>
      <h3>
        Choose or load data, augment it, and evaluate the model of your choice!
      </h3>
      <p>
        If you use sensitive data, or if you want more flexibility, use the{" "}
        <ColabLink>Google Colab version</ColabLink> of this tool!
      </p>
      <p>
        You can checkout the documentation and the code behind this tool{" "}
        <a href="https://github.com/FabienRoger/Countergen">here</a>.
      </p>

      <DataSelection dataset={dataset} setDataset={setDataset} />

      <DataAugmentation
        dataset={dataset}
        augdataset={augdataset}
        setAugDataset={setAugDataset}
      />

      <ModelEvaluation augdataset={augdataset} />

      <p>
        <i>Your data won't be collected nor stored.</i>
      </p>
      <p>
        The code for this website and instructions to adapt it to your needs are
        freely available. For more information, visit{" "}
        <a href="https://github.com/FabienRoger/Countergen-Website">
          github.com/FabienRoger/Countergen-Website
        </a>
        .
      </p>
    </Container>
  );
};

export default CountergenWeb;