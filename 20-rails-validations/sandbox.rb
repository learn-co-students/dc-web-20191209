

def gen_times(factor)
    return Proc.new {|n, m| n * 3}
end

times3 = gen_times(3)

puts times3.call(10)

