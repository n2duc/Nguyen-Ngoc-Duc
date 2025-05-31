import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { vietnameseData } from "@/lib/data";

interface AddressInputProps {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}

const AddressInput = ({ value = "", onChange, name }: AddressInputProps) => {
  const [province, setProvince] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");

  useEffect(() => {
    const combinedValue = [street, ward, province].filter(Boolean).join(", ");
    if (value && combinedValue !== value) {
      const parts = value.split(", ");
      const newStreet = parts.slice(0, parts.length-2).join(", ");
      const newWard = parts[parts.length - 2];
      const newProvince = parts[parts.length - 1];
      if (parts.length >= 3) {
        setStreet(newStreet || "");
        setWard(newWard || "");
        setProvince(newProvince || "");
      }
    }
  }, [value]);

  useEffect(() => {
    if (province || ward || street) {
      const combinedValue = [street, ward, province].filter(Boolean).join(", ");
      if (combinedValue !== value) {
        onChange?.(combinedValue);
      }
    }
  }, [province, ward, street, onChange, value]);

  const handleProvinceChange = (newProvince: string) => {
    setProvince(newProvince);
    setWard("");
  };

  const availableWards = province
    ? vietnameseData[province as keyof typeof vietnameseData] || []
    : [];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${name}-province`}>Tỉnh / Thành phố</Label>
        <Select value={province} onValueChange={handleProvinceChange}>
          <SelectTrigger id={`${name}-province`} className="w-full">
            <SelectValue placeholder="Chọn tỉnh/thành phố" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(vietnameseData).map((prov) => (
              <SelectItem key={prov} value={prov}>
                {prov}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${name}-ward`}>Phường / Xã</Label>
        <Select value={ward} onValueChange={setWard} disabled={!province}>
          <SelectTrigger id={`${name}-ward`} className="w-full">
            <SelectValue placeholder="Chọn phường/xã" />
          </SelectTrigger>
          <SelectContent>
            {availableWards.map((w) => (
              <SelectItem key={w} value={w}>
                {w}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${name}-street`}>Đường và số nhà</Label>
        <Input
          id={`${name}-street`}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          disabled={!ward}
          placeholder="Nhập đường và số nhà"
        />
      </div>
    </div>
  );
};

export default AddressInput;
