import { Variable } from "astal";

const cpuProgress = Variable;

export default function Cpu() {
  return (
    <box className="module module-left cpu">
      <box className="cpu-icon">
        <label label=""></label>
      </box>
      <box className="cpu-reading">
        <circularprogress value={0.5} className="cpu-progress" rounded={true} />
        <label label="Reading" />
      </box>
    </box>
  );
}
