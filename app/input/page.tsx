import CopyComponent from "@/components/copy-component";
import InputComponent from "@/components/input";
import { input } from "@/lib/data";

export default function Input() {
    return (
        <CopyComponent code={input}>
            <InputComponent />
        </CopyComponent>
    )
}
