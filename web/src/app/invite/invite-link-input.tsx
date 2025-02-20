'use client'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLink({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5 " />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton onClick={copyInviteLink} className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
