namespace ReactInBlazorWasm.Models;
public record ValueLabel
{
  public ValueLabel() { }
  public ValueLabel(string value, string label)
  {
    this.value = value;
    this.label = label;
  }

  public string value { get; set; } = default!;
  public string label { get; set; } = default!;
}