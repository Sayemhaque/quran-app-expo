import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomePage() {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <SafeAreaView className='px-12'>
      <Accordion
        type='multiple'
        collapsible
        defaultValue={["item-1"]}
        className='w-full max-w-sm native:max-w-md'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <Text className='text-xl font-bold'>Is it accessible?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            <Text>What are universal components?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              In the world of React Native, universal components are components
              that work on both web and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <AlertDialog className='bg-white'>
        <AlertDialogTrigger asChild>
          <Button variant='secondary'>
            <Text>Show Alert Dialog</Text>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Text>Cancel</Text>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Text>Continue</Text>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Select defaultValue={{ value: "apple", label: "Apple" }}>
        <SelectTrigger className='w-[250px]'>
          <SelectValue
            className='text-foreground text-sm native:text-lg'
            placeholder='Select a fruit'
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className='w-[250px]'>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem label='Apple' value='apple'>
              Apple
            </SelectItem>
            <SelectItem label='Banana' value='banana'>
              Banana
            </SelectItem>
            <SelectItem label='Blueberry' value='blueberry'>
              Blueberry
            </SelectItem>
            <SelectItem label='Grapes' value='grapes'>
              Grapes
            </SelectItem>
            <SelectItem label='Pineapple' value='pineapple'>
              Pineapple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </SafeAreaView>
  );
}
