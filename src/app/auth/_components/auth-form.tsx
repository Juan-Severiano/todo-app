'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Magic Link Login</h1>
        <p className="text-muted-foreground">Enter your email to receive a login link.</p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              {...form.register('email')}
            />
            <Button type="submit" className="w-full">
              Send Magic Link
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="#" className="underline" prefetch={false}>
          Sign up
        </Link>
      </div>
    </div>
  )
}