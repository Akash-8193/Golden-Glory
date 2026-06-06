import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Offerings() {
  const plans = [
    { title: "Flexible Desk", price: "5,500", suffix: "/Mo", for: "Freelancers, remote workers, part-time professionals", feats: ["Flexible seating", "High-speed internet", "Pantry + tea & coffee", "Reception support", "Power backup & CCTV"] },
    { title: "Dedicated Desk", price: "6,500", suffix: "/Mo", for: "Regular professionals needing consistency", feats: ["Personal fixed desk", "Secure & stable setup", "Fiber internet + power backup", "Pantry access", "Meeting room (limited)"] },
    { title: "Enclosed Cabin", price: "8,000", suffix: "/Mo/seat", for: "Founders, small teams, leadership", feats: ["Private lockable cabin", "Ergonomic seating", "Noise-free workspace", "Internet & backup power", "Branding/identity options"] },
    { title: "Executive Cabin", price: "30,000", suffix: "/Mo", for: "Founders, executives, managers", feats: ["Private lockable cabin", "Ergonomic seating", "Noise-free workspace", "Meeting room credits", "Branding options"] },
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              <SplitText>Our Offerings</SplitText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible and affordable coworking solutions tailored for individuals, startups, and growing teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <Card key={i} className="bg-card border-border rounded-none overflow-hidden hover:border-primary/50 transition-colors flex flex-col" data-cursor="hover">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{plan.title}</h3>
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <div className="text-3xl font-bold text-primary mb-1">Rs. {plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.suffix}</div>
                  </div>
                  <p className="text-sm text-foreground/90 font-medium mb-6 min-h-[40px]">
                    <span className="text-muted-foreground">Best for: </span>{plan.for}
                  </p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.feats.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground font-medium py-3 transition-colors mt-auto border border-border hover:border-primary">
                    Select Plan
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
