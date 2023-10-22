import type { DNSResponse } from "@/utils/packages/dohjs";
import doh from "@/utils/packages/dohjs";

// https://developers.google.com/speed/public-dns/docs/doh/json
export interface DNSQuery {
  name: string;
  type?: string; // DNS record type (either empty or one of A, AAAA, CNAME, MX, NS, PTR, SOA, or TXT).
  cd?: boolean; // The CD (Checking Disabled) flag. Use cd=1, or cd=true to disable DNSSEC validation; use cd=0, cd=false, or no cd parameter to enable DNSSEC validation.
  ct?: string; // The content type of the request body. Currently only application/dns-json is supported.
  do?: boolean; // The DO (DNSSEC OK) flag. Use do=1, or do=true to set the DO flag; use do=0, do=false, or no do parameter to unset the DO flag.
  edns_client_subnet?: string; // The edns0-client-subnet option. Format is an IP address with a subnet mask. Examples: 1.2.3.4/24, 2001:700:300::/48.
}

export async function makeDOHQuery(
  server: string,
  query: DNSQuery
): Promise<DNSResponse> {
  const resolver = new doh.DohResolver(server);
  const response = await resolver.query(query.name, query.type, "GET");

  return response;
}
