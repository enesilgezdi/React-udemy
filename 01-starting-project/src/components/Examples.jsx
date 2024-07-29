import TabButton from "./TabButton";
import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Table from "./Tab";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)

    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
        );
    }
    return (
        <Section title={Examples} id='examples'>
            <Table
                // ButtonsContainer="menu"
                buttons={<>
                    <TabButton isSelect={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelect={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelect={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelect={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton></>}>{tabContent}
            </Table>

        </Section>
    )
}