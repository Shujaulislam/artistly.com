"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSection } from "./FormSection";
import { FileUpload } from "./FileUpload";

const categoriesList = ["Singer", "DJ", "Dancer", "Speaker"];
const languagesList = ["English", "Hindi", "French", "Spanish"];
const feeRanges = [
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
];

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(50, "Bio must be at least 50 characters"),
  categories: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one category")
    .required(),
  languages: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one language")
    .required(),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed().nullable().notRequired(),
});

interface ArtistFormValues extends yup.InferType<typeof schema> {}

export function ArtistForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<ArtistFormValues>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      profileImage: null,
    },
  });

  const onSubmit: SubmitHandler<ArtistFormValues> = (data) => {
    console.log("Submitted data:", data);
    toast.success("Artist submission received successfully");
    reset(undefined, {
      keepDirty: false,
      keepErrors: false,
      keepTouched: false,
    });
  };

  const selectedCategories = watch("categories") || [];
  const selectedLanguages = watch("languages") || [];

  const toggleMultiSelect = (
    field: "categories" | "languages",
    value: string,
    checked: boolean
  ) => {
    const current = getValues(field) || [];
    const updated = checked
      ? [...current, value]
      : current.filter((item) => item !== value);
    setValue(field, updated, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Info */}
      <FormSection title="Basic Info">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input {...register("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Bio</label>
            <Textarea {...register("bio")} className="min-h-[100px]" />
            {errors.bio && (
              <p className="text-sm text-destructive">{errors.bio.message}</p>
            )}
          </div>
        </div>
      </FormSection>

      {/* Categories */}
      <FormSection title="Categories & Languages">
        <div className="grid grid-cols-2 gap-4">
          {categoriesList.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(checked) =>
                  toggleMultiSelect("categories", cat, checked as boolean)
                }
              />
              <label htmlFor={`cat-${cat}`} className="text-sm">
                {cat}
              </label>
            </div>
          ))}
        </div>
        {errors.categories && (
          <p className="text-sm text-destructive">
            {errors.categories.message}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 mt-6">
          {languagesList.map((lang) => (
            <div key={lang} className="flex items-center gap-2">
              <Checkbox
                id={`lang-${lang}`}
                checked={selectedLanguages.includes(lang)}
                onCheckedChange={(checked) =>
                  toggleMultiSelect("languages", lang, checked as boolean)
                }
              />
              <label htmlFor={`lang-${lang}`} className="text-sm">
                {lang}
              </label>
            </div>
          ))}
        </div>
        {errors.languages && (
          <p className="text-sm text-destructive">{errors.languages.message}</p>
        )}
      </FormSection>

      {/* Fee and Location */}
      <FormSection title="Performance Details">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Fee Range</label>
            <select
              {...register("feeRange")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select a range</option>
              {feeRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.feeRange && (
              <p className="text-sm text-destructive">
                {errors.feeRange.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Location</label>
            <Input {...register("location")} placeholder="City, State" />
            {errors.location && (
              <p className="text-sm text-destructive">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>
      </FormSection>

      {/* Image Upload */}
      <FormSection title="Profile Image (Optional)">
        <FileUpload
          onChange={(file) => setValue("profileImage", file)}
          error={errors.profileImage?.message}
        />
      </FormSection>

      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  );
}
