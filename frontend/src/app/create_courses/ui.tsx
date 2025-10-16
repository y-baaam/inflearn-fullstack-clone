"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateCourseUI() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const createCourseMutation = useMutation({
    mutationFn: () => api.createCourse(title),
    onSuccess: (res) => {
      if (res.data && !res.error) {
        router.push(`/course/${res.data.id}/edit/course_info`);
      }
      if (res.error) {
        toast.error(res.error as string);
      }
    },
  });

  return (
    <div className="w-full max-w-xl mx-auto h-[90vh] items-center justify-center flex flex-col gap-4">
      <h2 className="text-xl text-center font-bold">
        제목을 입력해주세요!
        <br />
        너무 고민하지마세요. 제목은 언제든 수정 가능해요 :)
      </h2>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요."
        className="bg-[#F6F6F6] py-6 rounded-xs"
      />
      <div className="space-x-2">
        <Button className="px-8 py-6 text-xl font-bold " variant="outline">
          이전
        </Button>
        <Button
          onClick={() => {
            createCourseMutation.mutate();
          }}
          className="px-8 py-6 text-xl font-bold "
          variant="default"
        >
          만들기
        </Button>
      </div>
    </div>
  );
}
