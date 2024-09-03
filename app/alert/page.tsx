import AlertComponent from '@/components/alert';
import CopyComponent from '@/components/copy-component';
import { alert } from '@/lib/data';
export default function Alert() {
  return (
    <CopyComponent code={alert}>
      <AlertComponent />
    </CopyComponent>
  );
}
